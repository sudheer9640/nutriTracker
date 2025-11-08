import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  vitaminRDA, mineralRDA, macroRDA, masterVitamins, masterMinerals, masterMacros, Food, Nutrient,
  NutrientP, macrosFoodSources, vitaminsFoodSources, mineralsFoodSources, nuts, seeds, fruits, vegetables,
  pulses, nonVegFoods, cereals, dairyFoods, liquids, millets, dryFruits
} from './rda-tables';
import { FormsModule } from '@angular/forms';
interface NutrientCell { value: number; percent: number; status: string }
interface NutrientRdaRow { food: string; values: { [nutrientName: string]: NutrientCell }; }

@Component({
  selector: 'app-nutri-tracker',
  imports: [
    FormsModule,
    CommonModule
  ],
  standalone: true,
  templateUrl: './nutriTracker.component.html',
  styleUrls: ['./nutriTracker.component.scss']
})
export class NutriTrackerComponent implements OnInit {

  ageGroups = ['1-3', '4-6', '7-9', '10-12', '13-15', '16-18', '19-30', '31-50', '51-70', '70+'];
  genders = ['Male', 'Female'];
  selectedAgeGroup = '19-30';
  selectedGender = 'Male';
  selectedFood: Food | null = null;
  selectedQuantity: number | null = 100;
  selectedList: {
    name: string; quantity: number;
    unit: string;
    nutrients: { [key: string]: number }
  }[] = [];
  masterVitamins: Nutrient[] = masterVitamins;
  masterMinerals: Nutrient[] = masterMinerals;
  masterMacros: Nutrient[] = masterMacros;
  fruits: Food[] = fruits;
  vegetables: Food[] = vegetables;
  nonVegFoods: Food[] = nonVegFoods;
  pulses: Food[] = pulses;
  nuts: Food[] = nuts;
  seeds: Food[] = seeds;
  cereals: Food[] = cereals;
  millets: Food[] = millets;
  dairyFoods: Food[] = dairyFoods;
  dryFruits: Food[] = dryFruits;
  liquids: Food[] = liquids;
  macroRdaMatrix: NutrientRdaRow[] = [];
  vitaminRdaMatrix: NutrientRdaRow[] = [];
  mineralRdaMatrix: NutrientRdaRow[] = [];

  macroRdaTotals: { [macroName: string]: { percent: number; status: string; icon: string } } = {};
  vitaminRdaTotals: { [vitaminName: string]: { percent: number; status: string; icon: string } } = {};
  mineralRdaTotals: { [mineralName: string]: { percent: number; status: string; icon: string } } = {};

  mineralsFoodSources = mineralsFoodSources;
  vitaminsFoodSources = vitaminsFoodSources;
  macrosFoodSources = macrosFoodSources;

  ngOnInit() {
    this.updateRDAs();
  }

  updateRDAs() {
    console.log('called updateRDAs')
    const age = this.selectedAgeGroup;
    const gender = this.selectedGender;
    const vTable = (vitaminRDA as Record<string, Record<string, Record<string, number>>>)[gender][age];
    const mTable = (mineralRDA as Record<string, Record<string, Record<string, number>>>)[gender][age];
    const macTable = (macroRDA as Record<string, Record<string, Record<string, number>>>)[gender][age];
    this.masterVitamins = this.masterVitamins.map(v => ({ ...v, rda: vTable[v.name] ?? v.rda }));
    this.masterMinerals = this.masterMinerals.map(m => ({ ...m, rda: mTable[m.name] ?? m.rda }));
    this.masterMacros = this.masterMacros.map(mac => ({ ...mac, rda: macTable[mac.name] ?? mac.rda }));
    this.updateNutrientsMatrix();
  }

  addFood() {
    console.log('Selected food:', this.selectedFood);
    console.log('Selected quantity:', this.selectedQuantity);
    if (!this.selectedFood) {
      console.warn('No food selected — addFood aborted');
      return;
    } if (!this.selectedQuantity || this.selectedQuantity <= 0) {
      console.warn('Invalid quantity — addFood aborted');
      return;
    }
    this.selectedList.push({
      name: this.selectedFood.name,
      quantity: this.selectedQuantity,
      unit: this.selectedFood.units,
      nutrients: this.selectedFood.nutrients
    });
    this.updateNutrientsMatrix();
    console.log('Food added:', this.selectedFood.name, this.selectedQuantity);
    this.selectedFood = null;
    console.log(this.selectedList);
  }

  removeFood(name: string) {
    this.selectedList = this.selectedList.filter(f => f.name !== name);
  }

  generateNutrientMatrix(masterList: Nutrient[]): {
    matrix: NutrientRdaRow[];
    totals: { [nutrientName: string]: { percent: number; status: string; icon: string } };
  } {
    const totals: { [nutrientName: string]: { percent: number; status: string; icon: string } } = {};
    const matrix: NutrientRdaRow[] = [];

    for (const food of this.selectedList) {
      const values: { [nutrient: string]: NutrientCell } = {};

      for (const nutrient of masterList) {
        const name = nutrient.name;
        const raw = food.nutrients[name] ?? 0;
        const adjusted = raw * food.quantity / 100;
        const { percent, status } = this.computeNutrientStatus(adjusted, nutrient.rda, nutrient.max);

        values[name] = {
          value: Math.round(adjusted * 100) / 100,
          percent,
          status
        };

        const currentTotal = (totals[name]?.percent ?? 0) + percent;
        const { status: totalNutrientStatus, icon } = this.computeNutrientStatus((currentTotal * nutrient.rda) / 100, nutrient.rda, nutrient.max)
        totals[name] = {
          percent: currentTotal,
          status: totalNutrientStatus,
          icon
        };
      }

      matrix.push({ food: food.name, values });
    }

    return { matrix, totals };
  }


  updateNutrientsMatrix(): void {
    const { matrix: macroMatrix, totals: macroTotals } = this.generateNutrientMatrix(this.masterMacros);
    this.macroRdaMatrix = macroMatrix;
    this.macroRdaTotals = macroTotals;

    const { matrix: vitaminMatrix, totals: vitaminTotals } = this.generateNutrientMatrix(this.masterVitamins);
    this.vitaminRdaMatrix = vitaminMatrix;
    this.vitaminRdaTotals = vitaminTotals;

    const { matrix: mineralMatrix, totals: mineralTotals } = this.generateNutrientMatrix(this.masterMinerals);
    this.mineralRdaMatrix = mineralMatrix;
    this.mineralRdaTotals = mineralTotals;
  }



  computeNutrientStatus(value: number, rda: number, max: number | null): { percent: number; status: string, icon: string } {
    const percent = rda > 0 ? Math.round((value / rda) * 100) : 0;

    let status = '', icon = ''; // Safe
    if (max && value > max) {
      status = 'Excess';
      icon = '❌';
    } else if (percent >= 150) {
      status = 'Warn';
      icon = '⚠️'
    } else if (percent >= 90) {
      status = 'Optimal';
      icon = '✅'
    } else if (percent >= 50) {
      status = 'Moderate';
      icon = '🟡'
    } else {
      status = 'Low';
      icon = '🔴'
    }
    return { percent, status, icon };
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Optimal': return 'status-optimal';
      case 'Low': return 'status-low';
      case 'Warn': return 'status-warn';
      case 'Excess': return 'status-excess';
      case 'Moderate': return 'status-moderate';
      default: return '';
    }
  }



}
