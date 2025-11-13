import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  vitaminRDA, mineralRDA, macroRDA, masterVitamins, masterMinerals, masterMacros, masterAminoAcids,
  masterFats, Food, Nutrient, NutrientP, macrosFoodSources, vitaminsFoodSources, mineralsFoodSources, nuts,
  seeds, fruits, vegetables, pulses, nonVegFoods, cereals, dairyFoods, liquids, millets, dryFruits, aminoAcidRDA
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
    units: string;
    minerals: { [key: string]: number };
    vitamins: { [key: string]: number };
    aminoAcids: { [key: string]: number };
    macros: { [key: string]: number };
    fats: { [key: string]: number };
  }[] = [];
  masterVitamins: Nutrient[] = masterVitamins;
  masterMinerals: Nutrient[] = masterMinerals;
  masterMacros: Nutrient[] = masterMacros;
  masterAminoAcids: Nutrient[] = masterAminoAcids;
  masterFats: Nutrient[] = masterFats;
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
  aminoAcidRdaMatrix: NutrientRdaRow[] = [];
  fatRdaMatrix: NutrientRdaRow[] = [];
  macroRdaTotals: { [macroName: string]: { percent: number; status: string; icon: string } } = {};
  vitaminRdaTotals: { [vitaminName: string]: { percent: number; status: string; icon: string } } = {};
  mineralRdaTotals: { [mineralName: string]: { percent: number; status: string; icon: string } } = {};
  aminoAcidRdaTotals: { [aminoAcidName: string]: { percent: number; status: string; icon: string } } = {};
  fatRdaTotals: { [fatName: string]: { percent: number; status: string; icon: string } } = {};
  mineralsFoodSources = mineralsFoodSources; vitaminsFoodSources = vitaminsFoodSources;
  macrosFoodSources = macrosFoodSources;

  ngOnInit() {
    this.updateRDAs();
  }

  updateRDAs() {
    console.log('called updateRDAs');
    const age = this.selectedAgeGroup;
    const gender = this.selectedGender;
    const vTable = (vitaminRDA as Record<string, Record<string, Record<string, number>>>)[gender][age];
    const mTable = (mineralRDA as Record<string, Record<string, Record<string, number>>>)[gender][age];
    const macTable = (macroRDA as Record<string, Record<string, Record<string, number>>>)[gender][age];
    const aminoTable = (aminoAcidRDA as Record<string, Record<string, Record<string, number>>>)[gender][age];
    this.masterVitamins = this.masterVitamins.map(v => ({ ...v, rda: vTable[v.name] ?? v.rda }));
    this.masterMinerals = this.masterMinerals.map(m => ({ ...m, rda: mTable[m.name] ?? m.rda }));
    this.masterMacros = this.masterMacros.map(mac => ({ ...mac, rda: macTable[mac.name] ?? mac.rda }));
    this.masterAminoAcids = this.masterAminoAcids.map(amino => ({ ...amino, rda: aminoTable[amino.name] ?? amino.rda }));
    this.updateNutrientsMatrix();
  }

  addFood() {
    console.log('Selected food:', this.selectedFood);
    console.log('Selected quantity:', this.selectedQuantity);
    if (!this.selectedFood) {
      console.warn('No food selected — addFood aborted');
      return;
    }
    if (!this.selectedQuantity || this.selectedQuantity <= 0) {
      console.warn('Invalid quantity — addFood aborted');
      return;
    }

    this.selectedList.push({
      name: this.selectedFood.name,
      quantity: this.selectedQuantity,
      units: this.selectedFood.units,
      vitamins: this.selectedFood.vitamins,
      macros: this.selectedFood.macros,
      aminoAcids: this.selectedFood.aminoAcids,
      minerals: this.selectedFood.minerals,
      fats: this.selectedFood.fats
    });
    this.updateNutrientsMatrix();
    console.log('Food added:', this.selectedFood.name, this.selectedQuantity);
    this.selectedFood = null; console.log(this.selectedList);
  } removeFood(name: string) {
    this.selectedList = this.selectedList.filter(f => f.name !== name);
  }

  updateNutrientsMatrix(): void {
    const nutrientGroups: Record<string, Nutrient[]> = {
      macros: this.masterMacros,
      vitamins: this.masterVitamins,
      minerals: this.masterMinerals,
      aminoAcids: this.masterAminoAcids,
      fats: this.masterFats
    };
    type NutrientKey = 'macros' | 'vitamins' | 'minerals' | 'aminoAcids' | 'fats';
    for (const key of Object.keys(nutrientGroups) as NutrientKey[]) {
      const masterList = nutrientGroups[key as keyof Food];
      const matrix: NutrientRdaRow[] = [];
      const totals: Record<string, number> = {};
      for (const food of this.selectedList) {
        const values: Record<string, NutrientCell> = {};
        for (const nutrient of masterList) {
          const raw = food[key][nutrient.name];
          const adjusted = raw * food.quantity / 100;
          const { percent, status, icon } = this.computeNutrientStatus(adjusted, nutrient.rda, nutrient.max);
          values[nutrient.name] = { value: +adjusted.toFixed(2), percent, status };
          totals[nutrient.name] = (totals[nutrient.name] ?? 0) + adjusted;
        } matrix.push({ food: food.name, values });
      } const totalStatus: Record<string, {
        percent: number; status: string; icon: string
      }> = {};
      for (const nutrient of masterList) {
        const totalValue = totals[nutrient.name] ?? 0;
        const { percent, status, icon } = this.computeNutrientStatus(totalValue, nutrient.rda, nutrient.max);
        totalStatus[nutrient.name] = { percent, status, icon };
      } if (key === 'macros') {
        this.macroRdaMatrix = matrix;
        this.macroRdaTotals = totalStatus;
      }
      else if (key === 'vitamins') {
        this.vitaminRdaMatrix = matrix;
        this.vitaminRdaTotals = totalStatus;
      } else if (key === 'minerals') {
        this.mineralRdaMatrix = matrix;
        this.mineralRdaTotals = totalStatus;
      }
      else if (key === 'aminoAcids') {
        this.aminoAcidRdaMatrix = matrix;
        this.aminoAcidRdaTotals = totalStatus;
      } else if (key === 'fats') {
        this.fatRdaMatrix = matrix;
        this.fatRdaTotals = totalStatus;
      }
    }
  }

  computeNutrientStatus(value: number, rda: number | null, max: number | null): {
    percent: number; status: string, icon: string
  } {
    const percent = (rda && rda > 0) ? Math.round((value / rda) * 100) : 0;
    let status = '', icon = ''; // Safe
    if (max && value > max) {
      status = 'Excess';
      icon = '❌';
    } else if (percent >= 150) {
      status = 'Warn';
      icon = '⚠️';
    } else if (percent >= 90) {
      status = 'Optimal'; icon = '✅'
    } else if (percent >= 50) {
      status = 'Moderate';
      icon = '🟡';
    } else {
      status = 'Low';
      icon = '🔴';
    } return {
      percent, status, icon
    };
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