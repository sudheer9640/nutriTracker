

export interface NutrientP extends Nutrient { percent: number; status: string };
export interface Nutrient {
  name: string; units: string; rda: number | null; value: number;
  max: number | null;
};
export interface Food {
  name: string; units: string;
  minerals: { [key: string]: number }; // nutrient name → value per 100g
  vitamins: { [key: string]: number };
  macros: { [key: string]: number };
  aminoAcids: { [key: string]: number };
  fats: { [key: string]: number };
};

export const vitaminRDA = {
  Male: {
    '1-3': { 'Vitamin A': 400, 'Vitamin B12': 0.9, 'Vitamin B9': 100, 'Vitamin C': 40, 'Vitamin D': 400, 'Vitamin E': 5, 'Vitamin B6': 0.5, 'Vitamin B3': 6, 'Vitamin B2': 0.5, 'Vitamin B1': 0.5 },
    '4-6': { 'Vitamin A': 400, 'Vitamin B12': 1.2, 'Vitamin B9': 120, 'Vitamin C': 40, 'Vitamin D': 400, 'Vitamin E': 6, 'Vitamin B6': 0.6, 'Vitamin B3': 8, 'Vitamin B2': 0.6, 'Vitamin B1': 0.6 },
    '7-9': { 'Vitamin A': 600, 'Vitamin B12': 1.5, 'Vitamin B9': 150, 'Vitamin C': 45, 'Vitamin D': 400, 'Vitamin E': 7, 'Vitamin B6': 0.8, 'Vitamin B3': 10, 'Vitamin B2': 0.8, 'Vitamin B1': 0.8 },
    '10-12': { 'Vitamin A': 750, 'Vitamin B12': 2.0, 'Vitamin B9': 200, 'Vitamin C': 50, 'Vitamin D': 400, 'Vitamin E': 8, 'Vitamin B6': 1.0, 'Vitamin B3': 12, 'Vitamin B2': 1.0, 'Vitamin B1': 1.0 },
    '13-15': { 'Vitamin A': 900, 'Vitamin B12': 2.2, 'Vitamin B9': 300, 'Vitamin C': 60, 'Vitamin D': 400, 'Vitamin E': 9, 'Vitamin B6': 1.4, 'Vitamin B3': 14, 'Vitamin B2': 1.2, 'Vitamin B1': 1.1 },
    '16-18': { 'Vitamin A': 1000, 'Vitamin B12': 2.5, 'Vitamin B9': 300, 'Vitamin C': 70, 'Vitamin D': 400, 'Vitamin E': 10, 'Vitamin B6': 1.6, 'Vitamin B3': 15, 'Vitamin B2': 1.3, 'Vitamin B1': 1.2 },
    '19-30': { 'Vitamin A': 1000, 'Vitamin B12': 2.5, 'Vitamin B9': 300, 'Vitamin C': 80, 'Vitamin D': 400, 'Vitamin E': 10, 'Vitamin B6': 1.7, 'Vitamin B3': 16, 'Vitamin B2': 1.4, 'Vitamin B1': 1.2 },
    '31-50': { 'Vitamin A': 1000, 'Vitamin B12': 2.5, 'Vitamin B9': 300, 'Vitamin C': 80, 'Vitamin D': 400, 'Vitamin E': 10, 'Vitamin B6': 1.7, 'Vitamin B3': 16, 'Vitamin B2': 1.4, 'Vitamin B1': 1.2 },
    '51+': { 'Vitamin A': 1000, 'Vitamin B12': 2.5, 'Vitamin B9': 300, 'Vitamin C': 80, 'Vitamin D': 400, 'Vitamin E': 10, 'Vitamin B6': 1.6, 'Vitamin B3': 15, 'Vitamin B2': 1.3, 'Vitamin B1': 1.1 }
  },
  Female: {
    '1-3': { 'Vitamin A': 400, 'Vitamin B12': 0.9, 'Vitamin B9': 100, 'Vitamin C': 40, 'Vitamin D': 400, 'Vitamin E': 5, 'Vitamin B6': 0.5, 'Vitamin B3': 6, 'Vitamin B2': 0.5, 'Vitamin B1': 0.5 },
    '4-6': { 'Vitamin A': 400, 'Vitamin B12': 1.2, 'Vitamin B9': 120, 'Vitamin C': 40, 'Vitamin D': 400, 'Vitamin E': 6, 'Vitamin B6': 0.6, 'Vitamin B3': 8, 'Vitamin B2': 0.6, 'Vitamin B1': 0.6 },
    '7-9': { 'Vitamin A': 600, 'Vitamin B12': 1.5, 'Vitamin B9': 150, 'Vitamin C': 45, 'Vitamin D': 400, 'Vitamin E': 7, 'Vitamin B6': 0.8, 'Vitamin B3': 10, 'Vitamin B2': 0.8, 'Vitamin B1': 0.8 },
    '10-12': { 'Vitamin A': 750, 'Vitamin B12': 2.0, 'Vitamin B9': 200, 'Vitamin C': 50, 'Vitamin D': 400, 'Vitamin E': 8, 'Vitamin B6': 1.0, 'Vitamin B3': 12, 'Vitamin B2': 1.0, 'Vitamin B1': 1.0 },
    '13-15': { 'Vitamin A': 840, 'Vitamin B12': 2.2, 'Vitamin B9': 300, 'Vitamin C': 60, 'Vitamin D': 400, 'Vitamin E': 8, 'Vitamin B6': 1.3, 'Vitamin B3': 13, 'Vitamin B2': 1.1, 'Vitamin B1': 1.0 },
    '16-18': { 'Vitamin A': 840, 'Vitamin B12': 2.5, 'Vitamin B9': 400, 'Vitamin C': 65, 'Vitamin D': 400, 'Vitamin E': 8, 'Vitamin B6': 1.5, 'Vitamin B3': 14, 'Vitamin B2': 1.1, 'Vitamin B1': 1.0 },
    '19-30': { 'Vitamin A': 840, 'Vitamin B12': 2.5, 'Vitamin B9': 400, 'Vitamin C': 65, 'Vitamin D': 400, 'Vitamin E': 8, 'Vitamin B6': 1.6, 'Vitamin B3': 14, 'Vitamin B2': 1.1, 'Vitamin B1': 1.0 },
    '31-50': { 'Vitamin A': 840, 'Vitamin B12': 2.5, 'Vitamin B9': 400, 'Vitamin C': 70, 'Vitamin D': 400, 'Vitamin E': 8, 'Vitamin B6': 1.5, 'Vitamin B3': 14, 'Vitamin B2': 1.1, 'Vitamin B1': 1.0 },
    '51+': { 'Vitamin A': 840, 'Vitamin B12': 2.5, 'Vitamin B9': 400, 'Vitamin C': 70, 'Vitamin D': 400, 'Vitamin E': 8, 'Vitamin B6': 1.5, 'Vitamin B3': 14, 'Vitamin B2': 1.1, 'Vitamin B1': 1.0 }
  }
};

export const mineralRDA = {
  Male: {
    '1-3': {
      'Calcium': 600, 'Iron': 9, 'Magnesium': 80, 'Zinc': 3, 'Phosphorus': 460, 'Potassium': 2000, 'Sodium': 1000, 'Iodine': 90, 'Selenium': 20, 'Copper': 0.7
    },
    '4-6': {
      'Calcium': 600, 'Iron': 13, 'Magnesium': 100, 'Zinc': 4, 'Phosphorus': 500, 'Potassium': 2250, 'Sodium': 1200, 'Iodine': 90, 'Selenium': 25, 'Copper': 0.8
    },
    '7-9': {
      'Calcium': 600, 'Iron': 16, 'Magnesium': 120, 'Zinc': 5, 'Phosphorus': 600, 'Potassium': 2500, 'Sodium': 1300, 'Iodine': 120, 'Selenium': 30, 'Copper': 0.9
    },
    '10-12': { 'Calcium': 800, 'Iron': 21, 'Magnesium': 200, 'Zinc': 8, 'Phosphorus': 800, 'Potassium': 3000, 'Sodium': 1500, 'Iodine': 120, 'Selenium': 40, 'Copper': 1.0 },
    '13-15': { 'Calcium': 1000, 'Iron': 23, 'Magnesium': 250, 'Zinc': 10, 'Phosphorus': 1000, 'Potassium': 3500, 'Sodium': 1800, 'Iodine': 150, 'Selenium': 55, 'Copper': 1.1 }, '16-18': { 'Calcium': 1000, 'Iron': 19, 'Magnesium': 300, 'Zinc': 12, 'Phosphorus': 1000, 'Potassium': 3750, 'Sodium': 2000, 'Iodine': 150, 'Selenium': 55, 'Copper': 1.1 }, '19-30': { 'Calcium': 1000, 'Iron': 17, 'Magnesium': 400, 'Zinc': 12, 'Phosphorus': 1000, 'Potassium': 3750, 'Sodium': 2000, 'Iodine': 150, 'Selenium': 55, 'Copper': 1.1 }, '31-50': { 'Calcium': 1000, 'Iron': 17, 'Magnesium': 350, 'Zinc': 12, 'Phosphorus': 1000, 'Potassium': 3750, 'Sodium': 2000, 'Iodine': 150, 'Selenium': 55, 'Copper': 1.1 }, '51+': { 'Calcium': 1000, 'Iron': 17, 'Magnesium': 340, 'Zinc': 11, 'Phosphorus': 900, 'Potassium': 3500, 'Sodium': 1800, 'Iodine': 150, 'Selenium': 55, 'Copper': 1.0 }
  }, Female: {
    '1-3': {
      'Calcium': 600, 'Iron': 9, 'Magnesium': 80, 'Zinc': 3, 'Phosphorus': 460, 'Potassium': 2000, 'Sodium': 1000, 'Iodine': 90, 'Selenium': 20, 'Copper': 0.7
    }, '4-6': { 'Calcium': 600, 'Iron': 13, 'Magnesium': 100, 'Zinc': 4, 'Phosphorus': 500, 'Potassium': 2250, 'Sodium': 1200, 'Iodine': 90, 'Selenium': 25, 'Copper': 0.8 }, '7-9': { 'Calcium': 600, 'Iron': 16, 'Magnesium': 120, 'Zinc': 5, 'Phosphorus': 600, 'Potassium': 2500, 'Sodium': 1300, 'Iodine': 120, 'Selenium': 30, 'Copper': 0.9 }, '10-12': { 'Calcium': 800, 'Iron': 23, 'Magnesium': 200, 'Zinc': 8, 'Phosphorus': 800, 'Potassium': 3000, 'Sodium': 1500, 'Iodine': 120, 'Selenium': 35, 'Copper': 1.0 }, '13-15': { 'Calcium': 1000, 'Iron': 32, 'Magnesium': 250, 'Zinc': 9, 'Phosphorus': 1000, 'Potassium': 3500, 'Sodium': 1800, 'Iodine': 150, 'Selenium': 55, 'Copper': 1.0 }, '16-18': { 'Calcium': 1000, 'Iron': 27, 'Magnesium': 310, 'Zinc': 10, 'Phosphorus': 1000, 'Potassium': 3750, 'Sodium': 2000, 'Iodine': 150, 'Selenium': 55, 'Copper': 1.0 }, '19-30': { 'Calcium': 1000, 'Iron': 21, 'Magnesium': 310, 'Zinc': 10, 'Phosphorus': 1000, 'Potassium': 3750, 'Sodium': 2000, 'Iodine': 150, 'Selenium': 55, 'Copper': 1.0 }, '31-50': { 'Calcium': 1000, 'Iron': 21, 'Magnesium': 310, 'Zinc': 10, 'Phosphorus': 1000, 'Potassium': 3750, 'Sodium': 2000, 'Iodine': 150, 'Selenium': 55, 'Copper': 1.0 }, '51+': { 'Calcium': 1000, 'Iron': 21, 'Magnesium': 300, 'Zinc': 9, 'Phosphorus': 900, 'Potassium': 3500, 'Sodium': 1800, 'Iodine': 150, 'Selenium': 55, 'Copper': 1.0 }
  }
};

export const macroRDA = { Male: { '1-3': { 'Calories': 1040, 'Protein': 11, 'Fat': 25, 'Carbohydrates': 130, 'Dietary Fiber': 19, 'Water': 1300 }, '4-6': { 'Calories': 1350, 'Protein': 16.7, 'Fat': 25, 'Carbohydrates': 135, 'Dietary Fiber': 20, 'Water': 1600 }, '7-9': { 'Calories': 1690, 'Protein': 20.1, 'Fat': 30, 'Carbohydrates': 200, 'Dietary Fiber': 25, 'Water': 1900 }, '10-12': { 'Calories': 2080, 'Protein': 29.5, 'Fat': 35, 'Carbohydrates': 245, 'Dietary Fiber': 30, 'Water': 2100 }, '13-15': { 'Calories': 2450, 'Protein': 44.9, 'Fat': 45, 'Carbohydrates': 275, 'Dietary Fiber': 35, 'Water': 2300 }, '16-18': { 'Calories': 2750, 'Protein': 54.3, 'Fat': 55, 'Carbohydrates': 290, 'Dietary Fiber': 38, 'Water': 2400 }, '19-30': { 'Calories': 2700, 'Protein': 60, 'Fat': 70, 'Carbohydrates': 310, 'Dietary Fiber': 40, 'Water': 2500 }, '31-50': { 'Calories': 2600, 'Protein': 60, 'Fat': 70, 'Carbohydrates': 310, 'Dietary Fiber': 40, 'Water': 2500 }, '51+': { 'Calories': 2400, 'Protein': 60, 'Fat': 60, 'Carbohydrates': 300, 'Dietary Fiber': 40, 'Water': 2400 } }, Female: { '1-3': { 'Calories': 1000, 'Protein': 11, 'Fat': 25, 'Carbohydrates': 130, 'Dietary Fiber': 19, 'Water': 1200 }, '4-6': { 'Calories': 1250, 'Protein': 16.7, 'Fat': 25, 'Carbohydrates': 135, 'Dietary Fiber': 20, 'Water': 1500 }, '7-9': { 'Calories': 1550, 'Protein': 20.1, 'Fat': 30, 'Carbohydrates': 200, 'Dietary Fiber': 25, 'Water': 1800 }, '10-12': { 'Calories': 1900, 'Protein': 29.5, 'Fat': 35, 'Carbohydrates': 240, 'Dietary Fiber': 28, 'Water': 2000 }, '13-15': { 'Calories': 2100, 'Protein': 43.0, 'Fat': 40, 'Carbohydrates': 270, 'Dietary Fiber': 32, 'Water': 2200 }, '16-18': { 'Calories': 2250, 'Protein': 51.9, 'Fat': 50, 'Carbohydrates': 285, 'Dietary Fiber': 34, 'Water': 2300 }, '19-30': { 'Calories': 2200, 'Protein': 55, 'Fat': 60, 'Carbohydrates': 300, 'Dietary Fiber': 35, 'Water': 2300 }, '31-50': { 'Calories': 2100, 'Protein': 55, 'Fat': 60, 'Carbohydrates': 300, 'Dietary Fiber': 35, 'Water': 2300 }, '51+': { 'Calories': 2000, 'Protein': 55, 'Fat': 55, 'Carbohydrates': 290, 'Dietary Fiber': 35, 'Water': 2200 } } }; export const aminoAcidRDA = { Male: { '1-3': { Histidine: 0.3, Isoleucine: 0.4, Leucine: 0.8, Lysine: 0.6, Methionine: 0.3, Phenylalanine: 0.5, Threonine: 0.3, Tryptophan: 0.1, Valine: 0.4 }, '4-6': { Histidine: 0.4, Isoleucine: 0.5, Leucine: 1.1, Lysine: 0.8, Methionine: 0.4, Phenylalanine: 0.7, Threonine: 0.4, Tryptophan: 0.15, Valine: 0.6 }, '7-9': { Histidine: 0.5, Isoleucine: 0.7, Leucine: 1.3, Lysine: 1.0, Methionine: 0.5, Phenylalanine: 0.9, Threonine: 0.6, Tryptophan: 0.2, Valine: 0.8 }, '10-12': { Histidine: 0.7, Isoleucine: 1.0, Leucine: 1.7, Lysine: 1.3, Methionine: 0.7, Phenylalanine: 1.2, Threonine: 0.8, Tryptophan: 0.25, Valine: 1.0 }, '13-15': { Histidine: 1.0, Isoleucine: 1.4, Leucine: 2.5, Lysine: 1.9, Methionine: 1.0, Phenylalanine: 1.8, Threonine: 1.2, Tryptophan: 0.35, Valine: 1.5 }, '16-18': { Histidine: 1.2, Isoleucine: 1.6, Leucine: 3.0, Lysine: 2.2, Methionine: 1.2, Phenylalanine: 2.1, Threonine: 1.4, Tryptophan: 0.4, Valine: 1.7 }, '19-30': { Histidine: 1.5, Isoleucine: 2.1, Leucine: 4.1, Lysine: 3.0, Methionine: 1.5, Phenylalanine: 2.8, Threonine: 1.5, Tryptophan: 0.5, Valine: 2.0 }, '31-50': { Histidine: 1.5, Isoleucine: 2.1, Leucine: 4.1, Lysine: 3.0, Methionine: 1.5, Phenylalanine: 2.8, Threonine: 1.5, Tryptophan: 0.5, Valine: 2.0 }, '51+': { Histidine: 1.5, Isoleucine: 2.0, Leucine: 4.0, Lysine: 2.9, Methionine: 1.4, Phenylalanine: 2.7, Threonine: 1.4, Tryptophan: 0.5, Valine: 1.9 } }, Female: { '1-3': { Histidine: 0.3, Isoleucine: 0.4, Leucine: 0.8, Lysine: 0.6, Methionine: 0.3, Phenylalanine: 0.5, Threonine: 0.3, Tryptophan: 0.1, Valine: 0.4 }, '4-6': { Histidine: 0.4, Isoleucine: 0.5, Leucine: 1.1, Lysine: 0.8, Methionine: 0.4, Phenylalanine: 0.7, Threonine: 0.4, Tryptophan: 0.15, Valine: 0.6 }, '7-9': { Histidine: 0.5, Isoleucine: 0.7, Leucine: 1.3, Lysine: 1.0, Methionine: 0.5, Phenylalanine: 0.9, Threonine: 0.6, Tryptophan: 0.2, Valine: 0.8 }, '10-12': { Histidine: 0.7, Isoleucine: 0.9, Leucine: 1.6, Lysine: 1.2, Methionine: 0.6, Phenylalanine: 1.1, Threonine: 0.7, Tryptophan: 0.25, Valine: 0.9 }, '13-15': { Histidine: 0.9, Isoleucine: 1.3, Leucine: 2.3, Lysine: 1.7, Methionine: 0.9, Phenylalanine: 1.6, Threonine: 1.1, Tryptophan: 0.35, Valine: 1.4 }, '16-18': { Histidine: 1.1, Isoleucine: 1.5, Leucine: 2.8, Lysine: 2.1, Methionine: 1.1, Phenylalanine: 2.0, Threonine: 1.3, Tryptophan: 0.4, Valine: 1.6 }, '19-30': { Histidine: 1.4, Isoleucine: 2.0, Leucine: 3.8, Lysine: 2.8, Methionine: 1.4, Phenylalanine: 2.6, Threonine: 1.4, Tryptophan: 0.5, Valine: 1.9 }, '31-50': { Histidine: 1.4, Isoleucine: 2.0, Leucine: 3.8, Lysine: 2.8, Methionine: 1.4, Phenylalanine: 2.6, Threonine: 1.4, Tryptophan: 0.5, Valine: 1.9 }, '51+': { Histidine: 1.4, Isoleucine: 1.9, Leucine: 3.7, Lysine: 2.7, Methionine: 1.3, Phenylalanine: 2.5, Threonine: 1.3, Tryptophan: 0.5, Valine: 1.8 } } };

export const masterVitamins = [
  { name: 'Vitamin A', units: 'µg', rda: 1000, max: 3000, value: 0 },
  { name: 'Vitamin C', units: 'mg', rda: 80, max: 2000, value: 0 },
  { name: 'Vitamin D', units: 'IU', rda: 400, max: 4000, value: 0 },
  { name: 'Vitamin E', units: 'mg', rda: 10, max: 1000, value: 0 },
  { name: 'Vitamin B1', units: 'mg', rda: 1.2, max: null, value: 0 },
  { name: 'Vitamin B2', units: 'mg', rda: 1.4, max: null, value: 0 },
  { name: 'Vitamin B3', units: 'mg', rda: 16, max: 35, value: 0 },
  { name: 'Vitamin B6', units: 'mg', rda: 1.7, max: 100, value: 0 },
  { name: 'Vitamin B9', units: 'µg', rda: 300, max: 1000, value: 0 },
  { name: 'Vitamin B12', units: 'µg', rda: 2.5, max: null, value: 0 }];

export const masterMinerals = [
  { name: 'Calcium', units: 'mg', rda: 1000, max: 2500, value: 0 },
  { name: 'Iron', units: 'mg', rda: 17, max: 45, value: 0 },
  { name: 'Magnesium', units: 'mg', rda: 340, max: 1000, value: 0 },
  { name: 'Zinc', units: 'mg', rda: 12, max: 40, value: 0 },
  { name: 'Phosphorus', units: 'mg', rda: 1000, max: 4000, value: 0 },
  { name: 'Potassium', units: 'mg', rda: 3750, max: null, value: 0 },
  { name: 'Sodium', units: 'mg', rda: 2000, max: 2300, value: 0 },
  { name: 'Iodine', units: 'µg', rda: 150, max: 1100, value: 0 },
  { name: 'Selenium', units: 'µg', rda: 55, max: 400, value: 0 },
  { name: 'Copper', units: 'mg', rda: 1.1, max: 10, value: 0 }];

export const masterMacros = [
  { name: 'Protein', units: 'g', rda: 60, max: null, value: 0 },
  { name: 'Fat', units: 'g', rda: 70, max: null, value: 0 },
  { name: 'Carbohydrates', units: 'g', rda: 310, max: null, value: 0 },
  { name: 'Calories', units: 'cal', rda: 2500, max: 2800, value: 0 },
  { name: 'Dietary Fiber', units: 'g', rda: 40, max: null, value: 0 },
  { name: 'Water', units: 'ml', rda: 2500, max: null, value: 0 }];


export const masterAminoAcids = [
  { name: 'Leucine', units: 'g', rda: 4.1, max: null, value: 0 },
  { name: 'Isoleucine', units: 'g', rda: 2.1, max: null, value: 0 }, {
    name: 'Lysine', units: 'g', rda: 3.0, max: null, value: 0
  },
  { name: 'Valine', units: 'g', rda: 2.0, max: null, value: 0 },
  { name: 'Methionine', units: 'g', rda: 1.5, max: null, value: 0 },
  { name: 'Phenylalanine', units: 'g', rda: 2.8, max: null, value: 0 },
  { name: 'Threonine', units: 'g', rda: 1.5, max: null, value: 0 },
  { name: 'Tryptophan', units: 'g', rda: 0.5, max: null, value: 0 },
  { name: 'Histidine', units: 'g', rda: 1.5, max: null, value: 0 }
];

export const masterFats = [
  { name: 'Saturated Fat', units: 'g', rda: 14, max: 20, value: 0 },
  { name: 'Monounsaturated Fat', units: 'g', rda: 30, max: 70, value: 0 },
  { name: 'Polyunsaturated Fat', units: 'g', rda: 15, max: 70, value: 0 },
  { name: 'Trans Fat', units: 'g', rda: 0, max: 2, value: 0 }
];

export const nuts: Food[] = [{
  name: "Almonds",
  units: "grams",
  macros: { "Protein": 21.2, "Fat": 49.4, "Carbohydrates": 21.6, "Dietary Fiber": 12.5, "Water": 4, Calories: 579 },
  minerals: { "Calcium": 269, "Iron": 3.7, "Magnesium": 270, "Phosphorus": 481, "Potassium": 733, "Sodium": 1, "Zinc": 3.1, "Copper": 1.03, "Selenium": 4.1, "Iodine": 0.2 },
  vitamins: { "Vitamin A": 1, "Vitamin B12": 0, "Vitamin B9": 50, "Vitamin C": 0, "Vitamin D": 0, "Vitamin E": 25.6, "Vitamin B6": 0.14, "Vitamin B3": 3.4, "Vitamin B2": 1.14, "Vitamin B1": 0.42 },
  aminoAcids: { Histidine: 0.43, Isoleucine: 0.70, Leucine: 1.40, Lysine: 0.58, Methionine: 0.15, Phenylalanine: 1.10, Threonine: 0.50, Tryptophan: 0.19, Valine: 0.90 },
  fats: { 'Saturated Fat': 3.7, 'Monounsaturated Fat': 31.6, 'Polyunsaturated Fat': 12.3, 'Trans Fat': 0 }
},
{
  name: "Peanuts",
  units: "grams",
  macros: { "Protein": 13.5, "Fat": 22.0, "Carbohydrates": 21.3, "Dietary Fiber": 8.8, "Water": 40, Calories: 567 },
  minerals: { "Calcium": 55, "Iron": 1.0, "Magnesium": 90, "Phosphorus": 180, "Potassium": 180, "Sodium": 394, "Zinc": 1.2, "Copper": 0.4, "Selenium": 2.0, "Iodine": 0.1, },
  vitamins: { "Vitamin A": 0, "Vitamin B12": 0, "Vitamin B9": 60, "Vitamin C": 0, "Vitamin D": 0, "Vitamin E": 2.0, "Vitamin B6": 0.1, "Vitamin B3": 4.5, "Vitamin B2": 0.1, "Vitamin B1": 0.3, },
  aminoAcids: { Histidine: 0.34, Isoleucine: 0.48, Leucine: 0.88, Lysine: 0.49, Methionine: 0.17, Phenylalanine: 0.70, Threonine: 0.46, Tryptophan: 0.13, Valine: 0.57 },
  fats: { 'Saturated Fat': 3.1, 'Monounsaturated Fat': 24.4, 'Polyunsaturated Fat': 15.6, 'Trans Fat': 0 }
},
{
  name: "Cashews", units: "grams",
  macros: { Calories: 553, "Protein": 15.3, "Fat": 46.4, "Carbohydrates": 32.7, "Dietary Fiber": 3.3, "Water": 5 },
  minerals: { "Calcium": 37, "Iron": 6.7, "Magnesium": 292, "Phosphorus": 593, "Potassium": 660, "Sodium": 12, "Zinc": 5.8, "Copper": 2.2, "Selenium": 19.9, "Iodine": 0.2 },
  vitamins: { "Vitamin A": 0, "Vitamin B12": 0, "Vitamin B9": 25, "Vitamin C": 0.5, "Vitamin D": 0, "Vitamin E": 0.9, "Vitamin B6": 0.42, "Vitamin B3": 1.1, "Vitamin B2": 0.06, "Vitamin B1": 0.42 },
  aminoAcids: { Histidine: 0.46, Isoleucine: 0.79, Leucine: 1.47, Lysine: 0.93, Methionine: 0.36, Phenylalanine: 0.95, Threonine: 0.69, Tryptophan: 0.29, Valine: 1.09 },
  fats: { 'Saturated Fat': 9.2, 'Monounsaturated Fat': 27.3, 'Polyunsaturated Fat': 7.8, 'Trans Fat': 0 }
},
{
  "name": "Walnuts", "units": "grams",
  "macros": { Calories: 654, "Protein": 8.5, "Fat": 36.5, "Carbohydrates": 7.7, "Dietary Fiber": 3.8, "Water": 40.0 },
  "minerals": { "Calcium": 53, "Iron": 1.6, "Magnesium": 85, "Phosphorus": 186, "Potassium": 237, "Sodium": 1, "Zinc": 1.7, "Copper": 0.87, "Selenium": 2.7, "Iodine": 0.2 },
  "vitamins": { "Vitamin A": 0.6, "Vitamin B12": 0, "Vitamin B9": 54, "Vitamin C": 0.7, "Vitamin D": 0, "Vitamin E": 0.4, "Vitamin B6": 0.3, "Vitamin B3": 0.6, "Vitamin B2": 0.08, "Vitamin B1": 0.19 },
  aminoAcids: { Histidine: 0.39, Isoleucine: 0.63, Leucine: 1.17, Lysine: 0.42, Methionine: 0.24, Phenylalanine: 0.71, Threonine: 0.60, Tryptophan: 0.17, Valine: 0.75 },
  fats: { 'Saturated Fat': 3.4, 'Monounsaturated Fat': 8.9, 'Polyunsaturated Fat': 47.2, 'Trans Fat': 0 }
},
{
  name: "Pistachios", units: "grams",
  macros: { "Calories": 562, "Protein": 20.6, "Fat": 45.3, "Carbohydrates": 27.2, "Dietary Fiber": 10.3, "Water": 4 },
  vitamins: { "Vitamin A": 26, "Vitamin B12": 0, "Vitamin B9": 51, "Vitamin C": 2.3, "Vitamin D": 0, "Vitamin E": 2.3, "Vitamin B6": 1.7, "Vitamin B3": 1.3, "Vitamin B2": 0.2, "Vitamin B1": 0.87 },
  minerals: { "Calcium": 105, "Iron": 4.0, "Magnesium": 121, "Phosphorus": 490, "Potassium": 1025, "Sodium": 1, "Zinc": 2.2, "Copper": 1.3, "Selenium": 7.0, "Iodine": 0.2, }, aminoAcids: { Histidine: 0.51, Isoleucine: 0.92, Leucine: 1.60, Lysine: 1.14, Methionine: 0.36, Phenylalanine: 1.09, Threonine: 0.68, Tryptophan: 0.25, Valine: 1.25 },
  fats: { 'Saturated Fat': 5.9, 'Monounsaturated Fat': 23.8, 'Polyunsaturated Fat': 14.4, 'Trans Fat': 0 }
},
{
  name: "Hazelnuts", units: "grams", macros: { "Calories": 628, "Protein": 15.0, "Fat": 61.0, "Carbohydrates": 17.0, "Dietary Fiber": 10.0, "Water": 5 },
  minerals: { "Calcium": 114, "Iron": 4.7, "Magnesium": 163, "Phosphorus": 290, "Potassium": 680, "Sodium": 0, "Zinc": 2.5, "Copper": 1.7, "Selenium": 2.4, "Iodine": 0.2 }, vitamins: { "Vitamin A": 20, "Vitamin B12": 0, "Vitamin B9": 113, "Vitamin C": 6.3, "Vitamin D": 0, "Vitamin E": 15.0, "Vitamin B6": 0.6, "Vitamin B3": 1.8, "Vitamin B2": 0.1, "Vitamin B1": 0.6 }, aminoAcids: { Histidine: 0.43, Isoleucine: 0.55, Leucine: 1.06, Lysine: 0.42, Methionine: 0.22, Phenylalanine: 0.66, Threonine: 0.50, Tryptophan: 0.19, Valine: 0.70 },
  fats: { 'Saturated Fat': 4.5, 'Monounsaturated Fat': 45.7, 'Polyunsaturated Fat': 7.9, 'Trans Fat': 0 }
},
{
  name: "Brazil Nuts", units: "grams",
  macros: { "Calories": 659, "Protein": 14.3, "Fat": 66.4, "Carbohydrates": 12.3, "Dietary Fiber": 7.5, "Water": 3 },
  minerals: { "Calcium": 160, "Iron": 2.4, "Magnesium": 376, "Phosphorus": 725, "Potassium": 659, "Sodium": 3, "Zinc": 4.1, "Copper": 1.7, "Selenium": 1917, "Iodine": 0.2 }, vitamins: { "Vitamin A": 0, "Vitamin B12": 0, "Vitamin B9": 22, "Vitamin C": 0.7, "Vitamin D": 0, "Vitamin E": 5.7, "Vitamin B6": 0.1, "Vitamin B3": 0.3, "Vitamin B2": 0.03, "Vitamin B1": 0.62 },
  aminoAcids: { Histidine: 0.41, Isoleucine: 0.52, Leucine: 1.19, Lysine: 0.49, Methionine: 1.12, Phenylalanine: 0.64, Threonine: 0.37, Tryptophan: 0.14, Valine: 0.76 },
  fats: { 'Saturated Fat': 15.1, 'Monounsaturated Fat': 24.5, 'Polyunsaturated Fat': 20.6, 'Trans Fat': 0 }
}];

export const seeds: Food[] = [{
  name: "Pumpkin Seeds", units: "grams",
  macros: { "Calories": 559, "Protein": 30.2, "Fat": 49.0, "Carbohydrates": 10.7, "Dietary Fiber": 6.0, "Water": 5 }, minerals: { "Calcium": 46, "Iron": 8.8, "Magnesium": 592, "Phosphorus": 1233, "Potassium": 809, "Sodium": 7, "Zinc": 7.8, "Copper": 1.4, "Selenium": 9.4, "Iodine": 0.2, },
  vitamins: { "Vitamin A": 16, "Vitamin B12": 0, "Vitamin B9": 58, "Vitamin C": 1.2, "Vitamin D": 0, "Vitamin E": 2.2, "Vitamin B6": 0.1, "Vitamin B3": 1.7, "Vitamin B2": 0.15, "Vitamin B1": 0.23, }, aminoAcids: { Histidine: 0.78, Isoleucine: 1.28, Leucine: 2.42, Lysine: 1.24, Methionine: 0.60, Phenylalanine: 1.73, Threonine: 1.00, Tryptophan: 0.58, Valine: 1.58 },
  fats: { 'Saturated Fat': 8.7, 'Monounsaturated Fat': 16.0, 'Polyunsaturated Fat': 20.7, 'Trans Fat': 0 }
},
{
  name: "Fenugreek Seeds", units: "grams", macros: { Calories: 323, "Protein": 23.0, "Fat": 6.4, "Carbohydrates": 58.0, "Dietary Fiber": 24.6, "Water": 10, }, minerals: { "Calcium": 176, "Iron": 33.5, "Magnesium": 191, "Zinc": 2.5, "Phosphorus": 296, "Potassium": 770, "Sodium": 67, "Iodine": 0.2, "Selenium": 6.3, "Copper": 1.1 }, vitamins: { "Vitamin A": 60, "Vitamin B12": 0, "Vitamin B9": 57, "Vitamin C": 3.0, "Vitamin D": 0, "Vitamin E": 0.5, "Vitamin B6": 0.6, "Vitamin B3": 1.1, "Vitamin B2": 0.37, "Vitamin B1": 0.32 }, aminoAcids: { Histidine: 0.67, Isoleucine: 1.24, Leucine: 1.76, Lysine: 1.68, Methionine: 0.34, Phenylalanine: 1.09, Threonine: 0.90, Tryptophan: 0.39, Valine: 1.10 },
  fats: { 'Saturated Fat': 1.0, 'Monounsaturated Fat': 1.6, 'Polyunsaturated Fat': 2.8, 'Trans Fat': 0 }
}, {
  name: "Flax Seeds", units: "grams", macros: { "Calories": 534, "Protein": 18.3, "Fat": 42.2, "Carbohydrates": 29.0, "Dietary Fiber": 27.0, "Water": 6 }, minerals: { "Calcium": 255, "Iron": 5.7, "Magnesium": 392, "Phosphorus": 642, "Potassium": 813, "Sodium": 30, "Zinc": 4.3, "Copper": 1.3, "Selenium": 25.4, "Iodine": 0.2 }, vitamins: { "Vitamin A": 0, "Vitamin B12": 0, "Vitamin B9": 87, "Vitamin C": 0.6, "Vitamin D": 0, "Vitamin E": 0.3, "Vitamin B6": 0.47, "Vitamin B3": 3.1, "Vitamin B2": 0.16, "Vitamin B1": 1.6 }, aminoAcids: { Histidine: 0.47, Isoleucine: 0.90, Leucine: 1.24, Lysine: 0.86, Methionine: 0.37, Phenylalanine: 0.96, Threonine: 0.77, Tryptophan: 0.30, Valine: 1.07 },
  fats: { 'Saturated Fat': 3.7, 'Monounsaturated Fat': 7.5, 'Polyunsaturated Fat': 28.7, 'Trans Fat': 0 }
}, {
  name: 'Chia Seeds', units: 'grams', macros: { Calories: 486, Protein: 17, Fat: 31, Carbohydrates: 42, 'Dietary Fiber': 34, Water: 5 }, minerals: { Calcium: 631, Iron: 7.7, Magnesium: 335, Phosphorus: 860, Potassium: 407, Sodium: 16, Zinc: 4.6, Copper: 0.9, Selenium: 25.5, Iodine: 0.2 }, vitamins: { 'Vitamin A': 54, 'Vitamin B12': 0, 'Vitamin B9': 49, 'Vitamin C': 1.6, 'Vitamin D': 0, 'Vitamin E': 0.5, 'Vitamin B6': 0.1, 'Vitamin B3': 2.5, 'Vitamin B2': 0.17, 'Vitamin B1': 0.62 }, aminoAcids: { Histidine: 0.53, Isoleucine: 0.80, Leucine: 1.37, Lysine: 0.97, Methionine: 0.59, Phenylalanine: 1.02, Threonine: 0.71, Tryptophan: 0.44, Valine: 0.95 },
  fats: { 'Saturated Fat': 3.3, 'Monounsaturated Fat': 2.3, 'Polyunsaturated Fat': 23.7, 'Trans Fat': 0 }
}, {
  name: 'Hemp Seeds', units: 'grams', macros: { Calories: 553, Protein: 31.6, Fat: 48.8, Carbohydrates: 8.7, 'Dietary Fiber': 4, Water: 4 }, minerals: { Calcium: 70, Iron: 7.9, Magnesium: 700, Phosphorus: 1100, Potassium: 1200, Sodium: 5, Zinc: 7, Copper: 1.6, Selenium: 3.2, Iodine: 0.2 }, vitamins: { 'Vitamin A': 11, 'Vitamin B12': 0, 'Vitamin B9': 110, 'Vitamin C': 1.5, 'Vitamin D': 0, 'Vitamin E': 0.8, 'Vitamin B6': 0.12, 'Vitamin B3': 2.8, 'Vitamin B2': 0.1, 'Vitamin B1': 0.4 }, aminoAcids: { Histidine: 0.97, Isoleucine: 1.29, Leucine: 2.16, Lysine: 1.28, Methionine: 0.93, Phenylalanine: 1.45, Threonine: 1.27, Tryptophan: 0.37, Valine: 1.78 },
  fats: { 'Saturated Fat': 4.6, 'Monounsaturated Fat': 5.4, 'Polyunsaturated Fat': 38.1, 'Trans Fat': 0 }
}, {
  name: 'Watermelon Seeds', units: 'grams', macros: { Calories: 557, Protein: 28.3, Fat: 47.4, Carbohydrates: 15, 'Dietary Fiber': 4, Water: 5 }, minerals: { Calcium: 54, Iron: 7.3, Magnesium: 515, Phosphorus: 755, Potassium: 648, Sodium: 3, Zinc: 10.2, Copper: 1.3, Selenium: 5.6, Iodine: 0.2 }, vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 58, 'Vitamin C': 0.9, 'Vitamin D': 0, 'Vitamin E': 0.3, 'Vitamin B6': 0.1, 'Vitamin B3': 3.1, 'Vitamin B2': 0.15, 'Vitamin B1': 0.19 }, aminoAcids: { Histidine: 0.65, Isoleucine: 1.10, Leucine: 1.80, Lysine: 1.10, Methionine: 0.45, Phenylalanine: 1.30, Threonine: 0.90, Tryptophan: 0.40, Valine: 1.40 },
  fats: { 'Saturated Fat': 8.1, 'Monounsaturated Fat': 8.1, 'Polyunsaturated Fat': 28.4, 'Trans Fat': 0 }
}, {
  name: 'Sunflower Seeds', units: 'grams', macros: { Calories: 584, Protein: 20.8, Fat: 49.6, Carbohydrates: 23.4, 'Dietary Fiber': 11.1, Water: 4 }, minerals: { Calcium: 78, Iron: 5.3, Magnesium: 325, Phosphorus: 660, Potassium: 645, Sodium: 9, Zinc: 5, Copper: 1.8, Selenium: 53, Iodine: 0.2 }, vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 227, 'Vitamin C': 1.4, 'Vitamin D': 0, 'Vitamin E': 35.2, 'Vitamin B6': 1.3, 'Vitamin B3': 8.3, 'Vitamin B2': 0.36, 'Vitamin B1': 1.5 }, aminoAcids: { Histidine: 0.63, Isoleucine: 1.14, Leucine: 1.66, Lysine: 0.94, Methionine: 0.49, Phenylalanine: 1.17, Threonine: 0.93, Tryptophan: 0.35, Valine: 1.32 },
  fats: { 'Saturated Fat': 4.5, 'Monounsaturated Fat': 18.5, 'Polyunsaturated Fat': 23.1, 'Trans Fat': 0 }
}, {
  name: 'Sesame Seeds', units: 'grams', macros: { Calories: 573, Protein: 11.5, Fat: 29.5, Carbohydrates: 14.3, 'Dietary Fiber': 7.7, Water: 40 }, minerals: { Calcium: 520, Iron: 8, Magnesium: 190, Phosphorus: 340, Potassium: 255, Sodium: 6, Zinc: 4.2, Copper: 2.2, Selenium: 18, Iodine: 0.2 }, vitamins: { 'Vitamin A': 2, 'Vitamin B12': 0, 'Vitamin B9': 52, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.13, 'Vitamin B6': 0.42, 'Vitamin B3': 2.4, 'Vitamin B2': 0.13, 'Vitamin B1': 0.42 }, aminoAcids: { Histidine: 0.55, Isoleucine: 0.75, Leucine: 1.50, Lysine: 0.65, Methionine: 0.88, Phenylalanine: 0.94, Threonine: 0.73, Tryptophan: 0.33, Valine: 0.98 },
  fats: { 'Saturated Fat': 4.1, 'Monounsaturated Fat': 11.7, 'Polyunsaturated Fat': 11.7, 'Trans Fat': 0 }
}];

export const dryFruits: Food[] = [{
  name: 'Dry Anjeer (Figs, Soaked)', units: 'grams', macros: { Calories: 249, Protein: 3.1, Fat: 0.8, Carbohydrates: 62, 'Dietary Fiber': 9.5, Water: 20 }, minerals: { Calcium: 155, Iron: 1.9, Magnesium: 65, Phosphorus: 67, Potassium: 660, Sodium: 10, Zinc: 0.5, Copper: 0.3, Selenium: 0.6, Iodine: 0.2 },
  vitamins: { 'Vitamin A': 9, 'Vitamin B12': 0, 'Vitamin B9': 8, 'Vitamin C': 0.8, 'Vitamin D': 0, 'Vitamin E': 0, 'Vitamin B6': 0.1, 'Vitamin B3': 0.4, 'Vitamin B2': 0.05, 'Vitamin B1': 0.06 }, aminoAcids: { Histidine: 0.011, Isoleucine: 0.023, Leucine: 0.033, Lysine: 0.030, Methionine: 0.006, Phenylalanine: 0.018, Threonine: 0.024, Tryptophan: 0.006, Valine: 0.028 },
  fats: { 'Saturated Fat': 0.1, 'Monounsaturated Fat': 0.1, 'Polyunsaturated Fat': 0.3, 'Trans Fat': 0 }
},
{
  name: 'Dates', units: 'grams', macros: { Calories: 277, Protein: 1.7, Fat: 0.2, Carbohydrates: 73, 'Dietary Fiber': 6.5, Water: 20 }, minerals: { Calcium: 64, Iron: 0.9, Magnesium: 52, Phosphorus: 62, Potassium: 640, Sodium: 5, Zinc: 0.3, Copper: 0.2, Selenium: 0.4, Iodine: 0.2 }, vitamins: { 'Vitamin A': 10, 'Vitamin B12': 0, 'Vitamin B9': 14, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0, 'Vitamin B6': 0.2, 'Vitamin B3': 0.5, 'Vitamin B2': 0.06, 'Vitamin B1': 0.05 }, aminoAcids: { Histidine: 0.029, Isoleucine: 0.045, Leucine: 0.082, Lysine: 0.054, Methionine: 0.017, Phenylalanine: 0.048, Threonine: 0.042, Tryptophan: 0.007, Valine: 0.066 },
  fats: { 'Saturated Fat': 0.03, 'Monounsaturated Fat': 0.05, 'Polyunsaturated Fat': 0.05, 'Trans Fat': 0 }
},
{ name: 'Raisins', units: 'grams', macros: { Calories: 299, Protein: 3, Fat: 0.5, Carbohydrates: 79, 'Dietary Fiber': 4, Water: 13 }, minerals: { Calcium: 50, Iron: 2, Magnesium: 32, Phosphorus: 101, Potassium: 749, Sodium: 11, Zinc: 0.3, Copper: 0.3, Selenium: 1, Iodine: 0 }, vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 5, 'Vitamin C': 2.3, 'Vitamin D': 0, 'Vitamin E': 0, 'Vitamin B6': 0.2, 'Vitamin B3': 1, 'Vitamin B2': 0.1, 'Vitamin B1': 0.1 }, aminoAcids: { Histidine: 0.030, Isoleucine: 0.050, Leucine: 0.090, Lysine: 0.060, Methionine: 0.020, Phenylalanine: 0.050, Threonine: 0.040, Tryptophan: 0.008, Valine: 0.070 }, fats: { 'Saturated Fat': 0.1, 'Monounsaturated Fat': 0.1, 'Polyunsaturated Fat': 0.1, 'Trans Fat': 0 } }];

export const vegetables: Food[] = [
  {
    name: 'Spinach',
    units: 'grams',
    macros: { Calories: 23, Protein: 2.61, Fat: 0.36, Carbohydrates: 3.24 },
    minerals: {
      Calcium: 89.1,
      Iron: 2.43,
      Magnesium: 71.1,
      Phosphorus: 44.1,
      Potassium: 502.2,
      Sodium: 71.1
    },
    vitamins: {
      'Vitamin A': 0.42,
      'Vitamin B6': 0.14,
      'Vitamin B12': 0,
      'Vitamin C': 16.86,
      'Vitamin D': 0,
      'Vitamin E': 1.6
    },
    aminoAcids: {
      Histidine: 0.066,
      Isoleucine: 0.152,
      Leucine: 0.231,
      Lysine: 0.182,
      Methionine: 0.055,
      Phenylalanine: 0.134,
      Threonine: 0.127,
      Tryptophan: 0.04,
      Valine: 0.168
    },
    fats: {
      'Saturated Fat': 0.06,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.17,
      'Trans Fat': 0
    }
  },
  {
    name: 'Carrot',
    units: 'grams',
    macros: {
      Calories: 41,
      Protein: 0.81,
      Fat: 0.18,
      Carbohydrates: 8.64,
      'Dietary Fiber': 2.52,
      Water: 85
    },
    minerals: {
      Calcium: 28.05,
      Iron: 0.27,
      Magnesium: 10.2,
      Phosphorus: 31.5,
      Potassium: 288,
      Sodium: 62.1,
      Zinc: 0.18,
      Copper: 0.045,
      Selenium: 0.09,
      Iodine: 0.14
    },
    vitamins: {
      'Vitamin A': 751.5,
      'Vitamin B12': 0,
      'Vitamin B9': 13.3,
      'Vitamin C': 3.54,
      'Vitamin D': 0,
      'Vitamin E': 0.56,
      'Vitamin B6': 0.07,
      'Vitamin B3': 0.42,
      'Vitamin B2': 0.035,
      'Vitamin B1': 0.049
    },
    aminoAcids: {
      Histidine: 0.053,
      Isoleucine: 0.101,
      Leucine: 0.135,
      Lysine: 0.134,
      Methionine: 0.027,
      Phenylalanine: 0.08,
      Threonine: 0.253,
      Tryptophan: 0.016,
      Valine: 0.09
    },
    fats: {
      'Saturated Fat': 0.03,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.11,
      'Trans Fat': 0
    }
  },
  {
    name: 'Tomato',
    units: 'grams',
    macros: {
      Calories: 18,
      Protein: 0.81,
      Fat: 0.18,
      Carbohydrates: 3.51,
      'Dietary Fiber': 1.08,
      Water: 90
    },
    minerals: {
      Calcium: 9,
      Iron: 0.27,
      Magnesium: 9.9,
      Phosphorus: 21.6,
      Potassium: 213.3,
      Sodium: 4.5,
      Zinc: 0.18,
      Copper: 0.054,
      Selenium: 0.45,
      Iodine: 0.07
    },
    vitamins: {
      'Vitamin A': 749.7,
      'Vitamin B12': 0,
      'Vitamin B9': 10.5,
      'Vitamin C': 8.22,
      'Vitamin D': 0,
      'Vitamin E': 0.4,
      'Vitamin B6': 0.056,
      'Vitamin B3': 0.42,
      'Vitamin B2': 0.014,
      'Vitamin B1': 0.028
    },
    aminoAcids: {
      Histidine: 0.016,
      Isoleucine: 0.026,
      Leucine: 0.039,
      Lysine: 0.039,
      Methionine: 0.009,
      Phenylalanine: 0.028,
      Threonine: 0.027,
      Tryptophan: 0.008,
      Valine: 0.027
    },
    fats: {
      'Saturated Fat': 0.03,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.05,
      'Trans Fat': 0
    }
  },
  {
    name: 'Cabbage',
    units: 'grams',
    macros: {
      Calories: 25,
      Protein: 1.17,
      Fat: 0.09,
      Carbohydrates: 5.22,
      'Dietary Fiber': 2.25,
      Water: 88
    },
    minerals: {
      Calcium: 36,
      Iron: 0.45,
      Magnesium: 10.2,
      Phosphorus: 23.4,
      Potassium: 153,
      Sodium: 16.2,
      Zinc: 0.18,
      Copper: 0.018,
      Selenium: 0.54,
      Iodine: 0.14
    },
    vitamins: {
      'Vitamin A': 83.3,
      'Vitamin B12': 0,
      'Vitamin B9': 30.1,
      'Vitamin C': 21.96,
      'Vitamin D': 0,
      'Vitamin E': 0.16,
      'Vitamin B6': 0.07,
      'Vitamin B3': 0.14,
      'Vitamin B2': 0.028,
      'Vitamin B1': 0.042
    },
    aminoAcids: {
      Histidine: 0.022,
      Isoleucine: 0.03,
      Leucine: 0.041,
      Lysine: 0.043,
      Methionine: 0.012,
      Phenylalanine: 0.032,
      Threonine: 0.035,
      Tryptophan: 0.011,
      Valine: 0.042
    },
    fats: {
      'Saturated Fat': 0.02,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.03,
      'Trans Fat': 0
    }
  },
  {
    name: 'Brinjal (Eggplant)',
    units: 'grams',
    macros: {
      Calories: 25,
      Protein: 0.9,
      Fat: 0.18,
      Carbohydrates: 5.31,
      'Dietary Fiber': 2.7,
      Water: 88
    },
    minerals: {
      Calcium: 8.1,
      Iron: 0.18,
      Magnesium: 12.6,
      Phosphorus: 21.6,
      Potassium: 206.1,
      Sodium: 1.8,
      Zinc: 0.18,
      Copper: 0.072,
      Selenium: 0.27,
      Iodine: 0.07
    },
    vitamins: {
      'Vitamin A': 24.3,
      'Vitamin B12': 0,
      'Vitamin B9': 15.4,
      'Vitamin C': 1.32,
      'Vitamin D': 0,
      'Vitamin E': 0.24,
      'Vitamin B6': 0.056,
      'Vitamin B3': 0.42,
      'Vitamin B2': 0.028,
      'Vitamin B1': 0.028
    },
    aminoAcids: {
      Histidine: 0.019,
      Isoleucine: 0.036,
      Leucine: 0.052,
      Lysine: 0.039,
      Methionine: 0.009,
      Phenylalanine: 0.035,
      Threonine: 0.03,
      Tryptophan: 0.008,
      Valine: 0.043
    },
    fats: {
      'Saturated Fat': 0.03,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.04,
      'Trans Fat': 0
    }
  },
  {
    name: 'Bottle Gourd',
    units: 'grams',
    macros: {
      Calories: 14,
      Protein: 0.4,
      Fat: 0.1,
      Carbohydrates: 2.5,
      'Dietary Fiber': 1.2,
      Water: 95
    },
    minerals: {
      Calcium: 24,
      Iron: 0.2,
      Magnesium: 11,
      Phosphorus: 20,
      Potassium: 170,
      Sodium: 13
    },
    vitamins: {
      'Vitamin C': 7.2,
      'Vitamin A': 16,
      'Vitamin B9': 6,
      'Vitamin B6': 0.04
    },
    aminoAcids: {
      Histidine: 0.015,
      Isoleucine: 0.025,
      Leucine: 0.045,
      Lysine: 0.035,
      Methionine: 0.01,
      Phenylalanine: 0.03,
      Threonine: 0.025,
      Tryptophan: 0.007,
      Valine: 0.035
    },
    fats: {
      'Saturated Fat': 0.01,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.02,
      'Trans Fat': 0
    }
  },
  {
    name: 'Sweet Potato',
    units: 'grams',
    macros: {
      Calories: 86,
      Protein: 1.4,
      Fat: 0.1,
      Carbohydrates: 20.7,
      'Dietary Fiber': 3.3,
      Water: 76
    },
    minerals: {
      Calcium: 30,
      Iron: 0.7,
      Magnesium: 18,
      Phosphorus: 32,
      Potassium: 475,
      Sodium: 27,
      Zinc: 0.3,
      Copper: 0.15,
      Selenium: 0.2,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 961,
      'Vitamin B12': 0,
      'Vitamin B9': 6,
      'Vitamin C': 12.8,
      'Vitamin D': 0,
      'Vitamin E': 0.26,
      'Vitamin B6': 0.21,
      'Vitamin B3': 1.5,
      'Vitamin B2': 0.06,
      'Vitamin B1': 0.08
    },
    aminoAcids: {
      Histidine: 0.027,
      Isoleucine: 0.048,
      Leucine: 0.081,
      Lysine: 0.058,
      Methionine: 0.025,
      Phenylalanine: 0.078,
      Threonine: 0.073,
      Tryptophan: 0.028,
      Valine: 0.075
    },
    fats: {
      'Saturated Fat': 0.02,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.03,
      'Trans Fat': 0
    }
  },
  {
    name: 'Potato',
    units: 'grams',
    macros: {
      Calories: 77,
      Protein: 2,
      Fat: 0.1,
      Carbohydrates: 17,
      'Dietary Fiber': 2.2,
      Water: 79
    },
    minerals: {
      Calcium: 10,
      Iron: 0.3,
      Magnesium: 23,
      Phosphorus: 44,
      Potassium: 379,
      Sodium: 7,
      Zinc: 0.3,
      Copper: 0.1,
      Selenium: 0.4,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 3,
      'Vitamin B12': 0,
      'Vitamin B9': 15,
      'Vitamin C': 8,
      'Vitamin D': 0,
      'Vitamin E': 0.01,
      'Vitamin B6': 0.2,
      'Vitamin B3': 1.4,
      'Vitamin B2': 0.03,
      'Vitamin B1': 0.08
    },
    aminoAcids: {
      Histidine: 0.038,
      Isoleucine: 0.07,
      Leucine: 0.103,
      Lysine: 0.104,
      Methionine: 0.027,
      Phenylalanine: 0.076,
      Threonine: 0.062,
      Tryptophan: 0.027,
      Valine: 0.096
    },
    fats: {
      'Saturated Fat': 0.03,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.04,
      'Trans Fat': 0
    }
  },
  {
    name: 'Ladies Finger',
    units: 'grams',
    macros: {
      Calories: 33,
      Protein: 1.9,
      Fat: 0.2,
      Carbohydrates: 6.4,
      'Dietary Fiber': 3.2,
      Water: 89
    },
    minerals: {
      Calcium: 81,
      Iron: 0.8,
      Magnesium: 57,
      Phosphorus: 61,
      Potassium: 299,
      Sodium: 8,
      Zinc: 0.4,
      Copper: 0.1,
      Selenium: 0.5,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 375,
      'Vitamin B12': 0,
      'Vitamin B9': 60,
      'Vitamin C': 13,
      'Vitamin D': 0,
      'Vitamin E': 0.3,
      'Vitamin B6': 0.1,
      'Vitamin B3': 1,
      'Vitamin B2': 0.06,
      'Vitamin B1': 0.1
    },
    aminoAcids: {
      Histidine: 0.023,
      Isoleucine: 0.038,
      Leucine: 0.06,
      Lysine: 0.045,
      Methionine: 0.014,
      Phenylalanine: 0.04,
      Threonine: 0.035,
      Tryptophan: 0.021,
      Valine: 0.05
    },
    fats: {
      'Saturated Fat': 0.03,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.05,
      'Trans Fat': 0
    }
  },
  {
    name: 'Ivy Gourd',
    units: 'grams',
    macros: {
      Calories: 18,
      Protein: 1,
      Fat: 0.2,
      Carbohydrates: 4,
      'Dietary Fiber': 1.5,
      Water: 93
    },
    minerals: {
      Calcium: 40,
      Iron: 1,
      Magnesium: 20,
      Phosphorus: 25,
      Potassium: 400,
      Sodium: 5,
      Zinc: 0.2,
      Copper: 0.1,
      Selenium: 0.3,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 300,
      'Vitamin B12': 0,
      'Vitamin B9': 14,
      'Vitamin C': 25,
      'Vitamin D': 0,
      'Vitamin E': 0.2,
      'Vitamin B6': 0.05,
      'Vitamin B3': 0.3,
      'Vitamin B2': 0.04,
      'Vitamin B1': 0.05
    },
    aminoAcids: {
      Histidine: 0.02,
      Isoleucine: 0.03,
      Leucine: 0.05,
      Lysine: 0.04,
      Methionine: 0.012,
      Phenylalanine: 0.035,
      Threonine: 0.028,
      Tryptophan: 0.01,
      Valine: 0.045
    },
    fats: {
      'Saturated Fat': 0.02,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.03,
      'Trans Fat': 0
    }
  },
  {
    name: 'Sponge Gourd',
    units: 'grams',
    macros: {
      Calories: 20,
      Protein: 0.7,
      Fat: 0.2,
      Carbohydrates: 3.1,
      'Dietary Fiber': 1.1,
      Water: 95
    },
    minerals: {
      Calcium: 26,
      Iron: 1,
      Magnesium: 28,
      Phosphorus: 20,
      Potassium: 34,
      Sodium: 25,
      Zinc: 0.1,
      Copper: 0.05,
      Selenium: 0.3,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 100,
      'Vitamin B12': 0,
      'Vitamin B9': 12,
      'Vitamin C': 10,
      'Vitamin D': 0,
      'Vitamin E': 0.1,
      'Vitamin B6': 0.04,
      'Vitamin B3': 0.2,
      'Vitamin B2': 0.03,
      'Vitamin B1': 0.05
    },
    aminoAcids: {
      Histidine: 0.018,
      Isoleucine: 0.028,
      Leucine: 0.048,
      Lysine: 0.038,
      Methionine: 0.011,
      Phenylalanine: 0.032,
      Threonine: 0.026,
      Tryptophan: 0.009,
      Valine: 0.04
    },
    fats: {
      'Saturated Fat': 0.01,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.02,
      'Trans Fat': 0
    }
  },
  {
    name: 'Broad Beans',
    units: 'grams',
    macros: {
      Calories: 88,
      Protein: 6.2,
      Fat: 0.4,
      Carbohydrates: 14.9,
      'Dietary Fiber': 4.8,
      Water: 77
    },
    minerals: {
      Calcium: 27,
      Iron: 1.5,
      Magnesium: 37,
      Phosphorus: 99,
      Potassium: 231,
      Sodium: 141,
      Zinc: 0.7,
      Copper: 0.16,
      Selenium: 1.8,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 8,
      'Vitamin B12': 0,
      'Vitamin B9': 60,
      'Vitamin C': 0.5,
      'Vitamin D': 0,
      'Vitamin E': 0.1,
      'Vitamin B6': 0.1,
      'Vitamin B3': 1.2,
      'Vitamin B2': 0.05,
      'Vitamin B1': 0.1
    },
    aminoAcids: {
      Histidine: 0.115,
      Isoleucine: 0.215,
      Leucine: 0.37,
      Lysine: 0.313,
      Methionine: 0.037,
      Phenylalanine: 0.195,
      Threonine: 0.178,
      Tryptophan: 0.048,
      Valine: 0.235
    },
    fats: {
      'Saturated Fat': 0.05,
      'Monounsaturated Fat': 0.02,
      'Polyunsaturated Fat': 0.07,
      'Trans Fat': 0
    }
  },
  {
    name: 'Cluster Beans',
    units: 'grams',
    macros: {
      Calories: 43,
      Protein: 3.7,
      Fat: 0.5,
      Carbohydrates: 10.8,
      'Dietary Fiber': 4.3,
      Water: 80
    },
    minerals: {
      Calcium: 130,
      Iron: 1.2,
      Magnesium: 42,
      Phosphorus: 60,
      Potassium: 210,
      Sodium: 10,
      Zinc: 0.3,
      Copper: 0.1,
      Selenium: 0.4,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 60,
      'Vitamin B12': 0,
      'Vitamin B9': 47,
      'Vitamin C': 11,
      'Vitamin D': 0,
      'Vitamin E': 0.2,
      'Vitamin B6': 0.05,
      'Vitamin B3': 0.6,
      'Vitamin B2': 0.04,
      'Vitamin B1': 0.06
    },
    aminoAcids: {
      Histidine: 0.045,
      Isoleucine: 0.08,
      Leucine: 0.13,
      Lysine: 0.11,
      Methionine: 0.03,
      Phenylalanine: 0.1,
      Threonine: 0.07,
      Tryptophan: 0.02,
      Valine: 0.1
    },
    fats: {
      'Saturated Fat': 0.04,
      'Monounsaturated Fat': 0.02,
      'Polyunsaturated Fat': 0.06,
      'Trans Fat': 0
    }
  },
  {
    name: 'Cucumber',
    units: 'grams',
    macros: {
      Calories: 16,
      Protein: 0.7,
      Fat: 0.1,
      Carbohydrates: 3.6,
      'Dietary Fiber': 0.5,
      Water: 95
    },
    minerals: {
      Calcium: 16,
      Iron: 0.3,
      Magnesium: 13,
      Phosphorus: 24,
      Potassium: 152,
      Sodium: 2,
      Zinc: 0.2,
      Copper: 0.05,
      Selenium: 0.3,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 105,
      'Vitamin B12': 0,
      'Vitamin B9': 7,
      'Vitamin C': 2.8,
      'Vitamin D': 0,
      'Vitamin E': 0.03,
      'Vitamin B6': 0.04,
      'Vitamin B3': 0.2,
      'Vitamin B2': 0.02,
      'Vitamin B1': 0.03
    },
    aminoAcids: {
      Histidine: 0.01,
      Isoleucine: 0.021,
      Leucine: 0.029,
      Lysine: 0.029,
      Methionine: 0.006,
      Phenylalanine: 0.019,
      Threonine: 0.019,
      Tryptophan: 0.005,
      Valine: 0.022
    },
    fats: {
      'Saturated Fat': 0.03,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.02,
      'Trans Fat': 0
    }
  },
  {
    name: 'Amaranth Leaves',
    units: 'grams',
    macros: {
      Calories: 23,
      Protein: 2.1,
      Fat: 0.2,
      Carbohydrates: 4.1,
      'Dietary Fiber': 1.8,
      Water: 91.5
    },
    minerals: {
      Calcium: 215,
      Iron: 2.3,
      Magnesium: 55,
      Phosphorus: 43,
      Potassium: 341,
      Sodium: 21,
      Zinc: 0.4,
      Copper: 0.2,
      Selenium: 0.6,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 2770,
      'Vitamin B12': 0,
      'Vitamin B9': 57,
      'Vitamin C': 41.1,
      'Vitamin D': 0,
      'Vitamin E': 0.18,
      'Vitamin B6': 0.1,
      'Vitamin B3': 0.5,
      'Vitamin B2': 0.1,
      'Vitamin B1': 0.05
    },
    aminoAcids: {
      Histidine: 0.052,
      Isoleucine: 0.119,
      Leucine: 0.195,
      Lysine: 0.127,
      Methionine: 0.036,
      Phenylalanine: 0.133,
      Threonine: 0.099,
      Tryptophan: 0.031,
      Valine: 0.137
    },
    fats: {
      'Saturated Fat': 0.04,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.05,
      'Trans Fat': 0
    }
  },
  {
    name: 'Sorrel Leaves',
    units: 'grams',
    macros: {
      Calories: 22,
      Protein: 2,
      Fat: 0.3,
      Carbohydrates: 3.2,
      'Dietary Fiber': 2,
      Water: 92
    },
    minerals: {
      Calcium: 44,
      Iron: 2.4,
      Magnesium: 38,
      Phosphorus: 35,
      Potassium: 390,
      Sodium: 20,
      Zinc: 0.3,
      Copper: 0.1,
      Selenium: 0.5,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 4000,
      'Vitamin B12': 0,
      'Vitamin B9': 48,
      'Vitamin C': 48,
      'Vitamin D': 0,
      'Vitamin E': 0.2,
      'Vitamin B6': 0.1,
      'Vitamin B3': 0.6,
      'Vitamin B2': 0.1,
      'Vitamin B1': 0.05
    },
    aminoAcids: {
      Histidine: 0.045,
      Isoleucine: 0.09,
      Leucine: 0.15,
      Lysine: 0.11,
      Methionine: 0.03,
      Phenylalanine: 0.1,
      Threonine: 0.08,
      Tryptophan: 0.025,
      Valine: 0.12
    },
    fats: {
      'Saturated Fat': 0.03,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.04,
      'Trans Fat': 0
    }
  },
  {
    name: 'Fenugreek Leaves',
    units: 'grams',
    macros: {
      Calories: 43,
      Protein: 4.4,
      Fat: 0.4,
      Carbohydrates: 6,
      'Dietary Fiber': 2.5,
      Water: 85
    },
    minerals: {
      Calcium: 176,
      Iron: 5.5,
      Magnesium: 53,
      Phosphorus: 47,
      Potassium: 360,
      Sodium: 18,
      Zinc: 0.9,
      Copper: 0.2,
      Selenium: 0.6,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 2200,
      'Vitamin B12': 0,
      'Vitamin B9': 57,
      'Vitamin C': 43,
      'Vitamin D': 0,
      'Vitamin E': 0.3,
      'Vitamin B6': 0.1,
      'Vitamin B3': 0.9,
      'Vitamin B2': 0.1,
      'Vitamin B1': 0.1
    },
    aminoAcids: {
      Histidine: 0.035,
      Isoleucine: 0.33,
      Leucine: 0.39,
      Lysine: 0.11,
      Methionine: 0.3,
      Phenylalanine: 0.08,
      Threonine: 0.2,
      Tryptophan: 0.03,
      Valine: 0.32
    },
    fats: {
      'Saturated Fat': 0.05,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.06,
      'Trans Fat': 0
    }
  },
  {
    name: 'Drumstick Leaves',
    units: 'grams',
    macros: {
      Calories: 64,
      Protein: 5,
      Fat: 1,
      Carbohydrates: 11,
      'Dietary Fiber': 2,
      Water: 78
    },
    minerals: {
      Calcium: 151,
      Iron: 2.3,
      Magnesium: 42,
      Phosphorus: 67,
      Potassium: 344,
      Sodium: 9,
      Zinc: 0.6,
      Copper: 0.2,
      Selenium: 0.5,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 6780,
      'Vitamin B12': 0,
      'Vitamin B9': 45,
      'Vitamin C': 31,
      'Vitamin D': 0,
      'Vitamin E': 0.1,
      'Vitamin B6': 0.9,
      'Vitamin B3': 2,
      'Vitamin B2': 0.5,
      'Vitamin B1': 0.2
    },
    aminoAcids: {
      Histidine: 0.046,
      Isoleucine: 0.106,
      Leucine: 0.186,
      Lysine: 0.126,
      Methionine: 0.029,
      Phenylalanine: 0.115,
      Threonine: 0.097,
      Tryptophan: 0.034,
      Valine: 0.144
    },
    fats: {
      'Saturated Fat': 0.06,
      'Monounsaturated Fat': 0.02,
      'Polyunsaturated Fat': 0.08,
      'Trans Fat': 0
    }
  },
  {
    name: 'Cauliflower',
    units: 'grams',
    macros: {
      Calories: 25,
      Protein: 1.8,
      Fat: 0.5,
      Carbohydrates: 4.1,
      'Dietary Fiber': 2.3,
      Water: 93
    },
    minerals: {
      Calcium: 22,
      Iron: 0.4,
      Magnesium: 15,
      Phosphorus: 44,
      Potassium: 142,
      Sodium: 18,
      Zinc: 0.2,
      Copper: 0.05,
      Selenium: 0.6,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 0,
      'Vitamin B12': 0,
      'Vitamin B9': 57,
      'Vitamin C': 44.3,
      'Vitamin D': 0,
      'Vitamin E': 0.08,
      'Vitamin B6': 0.2,
      'Vitamin B3': 0.5,
      'Vitamin B2': 0.06,
      'Vitamin B1': 0.05
    },
    aminoAcids: {
      Histidine: 0.037,
      Isoleucine: 0.07,
      Leucine: 0.107,
      Lysine: 0.099,
      Methionine: 0.026,
      Phenylalanine: 0.066,
      Threonine: 0.067,
      Tryptophan: 0.024,
      Valine: 0.092
    },
    fats: {
      'Saturated Fat': 0.03,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.05,
      'Trans Fat': 0
    }
  },
  {
    name: 'Radish',
    units: 'grams',
    macros: {
      Calories: 16,
      Protein: 0.7,
      Fat: 0.1,
      Carbohydrates: 3.4,
      'Dietary Fiber': 1.6,
      Water: 94
    },
    minerals: {
      Calcium: 25,
      Iron: 0.3,
      Magnesium: 10,
      Phosphorus: 20,
      Potassium: 233,
      Sodium: 39,
      Zinc: 0.2,
      Copper: 0.05,
      Selenium: 0.4,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 7,
      'Vitamin B12': 0,
      'Vitamin B9': 25,
      'Vitamin C': 14.8,
      'Vitamin D': 0,
      'Vitamin E': 0.03,
      'Vitamin B6': 0.07,
      'Vitamin B3': 0.3,
      'Vitamin B2': 0.02,
      'Vitamin B1': 0.02
    },
    aminoAcids: {
      Histidine: 0.013,
      Isoleucine: 0.02,
      Leucine: 0.031,
      Lysine: 0.033,
      Methionine: 0.01,
      Phenylalanine: 0.036,
      Threonine: 0.023,
      Tryptophan: 0.009,
      Valine: 0.035
    },
    fats: {
      'Saturated Fat': 0.02,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.03,
      'Trans Fat': 0
    }
  },
  {
    name: 'Beetroot',
    units: 'grams',
    macros: {
      Calories: 43,
      Protein: 1.6,
      Fat: 0.1,
      Carbohydrates: 9.6,
      'Dietary Fiber': 2.8,
      Water: 87
    },
    minerals: {
      Calcium: 16,
      Iron: 0.8,
      Magnesium: 23,
      Phosphorus: 40,
      Potassium: 305,
      Sodium: 78,
      Zinc: 0.3,
      Copper: 0.1,
      Selenium: 0.7,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 2,
      'Vitamin B12': 0,
      'Vitamin B9': 80,
      'Vitamin C': 3.6,
      'Vitamin D': 0,
      'Vitamin E': 0.04,
      'Vitamin B6': 0.06,
      'Vitamin B3': 0.3,
      'Vitamin B2': 0.04,
      'Vitamin B1': 0.03
    },
    aminoAcids: {
      Histidine: 0.022,
      Isoleucine: 0.05,
      Leucine: 0.071,
      Lysine: 0.06,
      Methionine: 0.019,
      Phenylalanine: 0.048,
      Threonine: 0.049,
      Tryptophan: 0.02,
      Valine: 0.059
    },
    fats: {
      'Saturated Fat': 0.02,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.03,
      'Trans Fat': 0
    }
  },
  {
    name: 'Dry Coconut',
    units: 'grams',
    macros: {
      Calories: 660,
      Protein: 3.3,
      Fat: 33.5,
      Carbohydrates: 24,
      'Dietary Fiber': 9,
      Water: 5
    },
    minerals: {
      Calcium: 26,
      Iron: 2.4,
      Magnesium: 90,
      Phosphorus: 113,
      Potassium: 356,
      Sodium: 37,
      Zinc: 1.1,
      Copper: 0.5,
      Selenium: 5,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 0,
      'Vitamin B12': 0,
      'Vitamin B9': 10,
      'Vitamin C': 1.5,
      'Vitamin D': 0,
      'Vitamin E': 0.2,
      'Vitamin B6': 0.05,
      'Vitamin B3': 0.9,
      'Vitamin B2': 0.02,
      'Vitamin B1': 0.06
    },
    aminoAcids: {
      Histidine: 0.158,
      Isoleucine: 0.27,
      Leucine: 0.511,
      Lysine: 0.304,
      Methionine: 0.129,
      Phenylalanine: 0.349,
      Threonine: 0.251,
      Tryptophan: 0.081,
      Valine: 0.417
    },
    fats: {
      'Saturated Fat': 57.2,
      'Monounsaturated Fat': 5.4,
      'Polyunsaturated Fat': 1.9,
      'Trans Fat': 0
    }
  },
  {
    name: 'Ginger (Raw)',
    units: 'grams',
    macros: {
      Calories: 80,
      Protein: 1.8,
      Fat: 0.8,
      Carbohydrates: 17.8,
      'Dietary Fiber': 2,
      Water: 79
    },
    minerals: {
      Calcium: 16,
      Iron: 0.6,
      Magnesium: 43,
      Phosphorus: 34,
      Potassium: 415,
      Sodium: 13,
      Zinc: 0.3,
      Copper: 0.2,
      Selenium: 0.7,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 0,
      'Vitamin B12': 0,
      'Vitamin B9': 11,
      'Vitamin C': 5,
      'Vitamin D': 0,
      'Vitamin E': 0.3,
      'Vitamin B6': 0.16,
      'Vitamin B3': 0.7,
      'Vitamin B2': 0.03,
      'Vitamin B1': 0.02
    },
    aminoAcids: {
      Histidine: 0.02,
      Isoleucine: 0.035,
      Leucine: 0.06,
      Lysine: 0.045,
      Methionine: 0.015,
      Phenylalanine: 0.04,
      Threonine: 0.03,
      Tryptophan: 0.01,
      Valine: 0.05
    },
    fats: {
      'Saturated Fat': 0.2,
      'Monounsaturated Fat': 0.1,
      'Polyunsaturated Fat': 0.3,
      'Trans Fat': 0
    }
  },
  {
    name: 'Garlic (Raw)',
    units: 'grams',
    macros: {
      Calories: 149,
      Protein: 6.4,
      Fat: 0.5,
      Carbohydrates: 33.1,
      'Dietary Fiber': 2.1,
      Water: 59
    },
    minerals: {
      Calcium: 181,
      Iron: 1.7,
      Magnesium: 25,
      Phosphorus: 153,
      Potassium: 401,
      Sodium: 17,
      Zinc: 1.2,
      Copper: 0.3,
      Selenium: 0.6,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 0,
      'Vitamin B12': 0,
      'Vitamin B9': 3,
      'Vitamin C': 31.2,
      'Vitamin D': 0,
      'Vitamin E': 0.08,
      'Vitamin B6': 1.24,
      'Vitamin B3': 0.7,
      'Vitamin B2': 0.11,
      'Vitamin B1': 0.2
    },
    aminoAcids: {
      Histidine: 0.07,
      Isoleucine: 0.12,
      Leucine: 0.21,
      Lysine: 0.16,
      Methionine: 0.05,
      Phenylalanine: 0.13,
      Threonine: 0.1,
      Tryptophan: 0.03,
      Valine: 0.14
    },
    fats: {
      'Saturated Fat': 0.1,
      'Monounsaturated Fat': 0.1,
      'Polyunsaturated Fat': 0.3,
      'Trans Fat': 0
    }
  },
  {
    name: 'Elephant Foot Yam',
    units: 'grams',
    macros: {
      Calories: 118,
      Protein: 2,
      Fat: 0.4,
      Carbohydrates: 23.9,
      'Dietary Fiber': 5,
      Water: 68
    },
    minerals: {
      Calcium: 50,
      Iron: 0.6,
      Magnesium: 21,
      Phosphorus: 60,
      Potassium: 670,
      Sodium: 13,
      Zinc: 0.3,
      Copper: 0.2,
      Selenium: 0.5,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 0,
      'Vitamin B12': 0,
      'Vitamin B9': 23,
      'Vitamin C': 5,
      'Vitamin D': 0,
      'Vitamin E': 0.2,
      'Vitamin B6': 0.1,
      'Vitamin B3': 0.6,
      'Vitamin B2': 0.04,
      'Vitamin B1': 0.05
    },
    aminoAcids: {
      Histidine: 0.03,
      Isoleucine: 0.05,
      Leucine: 0.09,
      Lysine: 0.07,
      Methionine: 0.02,
      Phenylalanine: 0.06,
      Threonine: 0.05,
      Tryptophan: 0.015,
      Valine: 0.07
    },
    fats: {
      'Saturated Fat': 0.03,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.04,
      'Trans Fat': 0
    }
  },
  {
    name: 'Drumsticks',
    units: 'grams',
    macros: {
      Calories: 37,
      Protein: 2.1,
      Fat: 0.3,
      Carbohydrates: 8.5,
      'Dietary Fiber': 3.2,
      Water: 85
    },
    minerals: {
      Calcium: 30,
      Iron: 0.6,
      Magnesium: 45,
      Phosphorus: 70,
      Potassium: 259,
      Sodium: 42,
      Zinc: 0.2,
      Copper: 0.1,
      Selenium: 0.4,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 74,
      'Vitamin B12': 0,
      'Vitamin B9': 44,
      'Vitamin C': 141,
      'Vitamin D': 0,
      'Vitamin E': 0.3,
      'Vitamin B6': 0.12,
      'Vitamin B3': 0.5,
      'Vitamin B2': 0.07,
      'Vitamin B1': 0.06
    },
    aminoAcids: {
      Histidine: 0.035,
      Isoleucine: 0.065,
      Leucine: 0.11,
      Lysine: 0.085,
      Methionine: 0.025,
      Phenylalanine: 0.07,
      Threonine: 0.06,
      Tryptophan: 0.02,
      Valine: 0.08
    },
    fats: {
      'Saturated Fat': 0.04,
      'Monounsaturated Fat': 0.01,
      'Polyunsaturated Fat': 0.05,
      'Trans Fat': 0
    }
  },
  {
    name: 'Green Peas',
    units: 'grams',
    macros: {
      Calories: 81,
      Protein: 5.4,
      Fat: 0.4,
      Carbohydrates: 14.5,
      'Dietary Fiber': 5.7,
      Water: 73
    },
    minerals: {
      Calcium: 25,
      Iron: 1.5,
      Magnesium: 33,
      Phosphorus: 108,
      Potassium: 244,
      Sodium: 5,
      Zinc: 1.2,
      Copper: 0.2,
      Selenium: 1,
      Iodine: 0.2
    },
    vitamins: {
      'Vitamin A': 765,
      'Vitamin B12': 0,
      'Vitamin B9': 65,
      'Vitamin C': 22,
      'Vitamin D': 0,
      'Vitamin E': 0.1,
      'Vitamin B6': 0.2,
      'Vitamin B3': 2,
      'Vitamin B2': 0.14,
      'Vitamin B1': 0.28
    },
    aminoAcids: {
      Histidine: 0.12,
      Isoleucine: 0.21,
      Leucine: 0.37,
      Lysine: 0.32,
      Methionine: 0.05,
      Phenylalanine: 0.19,
      Threonine: 0.17,
      Tryptophan: 0.04,
      Valine: 0.23
    },
    fats: {
      'Saturated Fat': 0.07,
      'Monounsaturated Fat': 0.03,
      'Polyunsaturated Fat': 0.19,
      'Trans Fat': 0
    }
  }
]

export const pulses: Food[] = [
  {
    name: 'Black Gram (Minapappu)', units: 'grams',
    macros: { Calories: 105, Protein: 8.7, Fat: 0.6, Carbohydrates: 18.6, 'Dietary Fiber': 5.2, Water: 65 }, minerals: { Calcium: 80, Iron: 1.6, Magnesium: 60, Phosphorus: 120, Potassium: 270, Sodium: 5, Zinc: 1, Copper: 0.3, Selenium: 2, Iodine: 0.1 }, vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 60, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.4, 'Vitamin B2': 0.05, 'Vitamin B1': 0.08 },
    aminoAcids: { Histidine: 0.52, Isoleucine: 0.34, Leucine: 0.5, Lysine: 0.17, Methionine: 0.07, Phenylalanine: 0.4, Threonine: 0.22, Tryptophan: 0.04, Valine: 0.31 },
    fats: { 'Saturated Fat': 0.1, 'Monounsaturated Fat': 0.1, 'Polyunsaturated Fat': 0.3, 'Trans Fat': 0 }
  },
  {
    name: 'Red Gram (Kandi Pappu)', units: 'grams',
    macros: { Calories: 120, Protein: 7.2, Fat: 0.6, Carbohydrates: 20, 'Dietary Fiber': 4.5, Water: 65 }, minerals: { Calcium: 50, Iron: 1.2, Magnesium: 50, Phosphorus: 100, Potassium: 250, Sodium: 5, Zinc: 0.8, Copper: 0.2, Selenium: 1.5, Iodine: 0.05 }, vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 70, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.3, 'Vitamin B2': 0.04, 'Vitamin B1': 0.06 },
    aminoAcids: { Histidine: 0.49, Isoleucine: 0.41, Leucine: 0.47, Lysine: 0.16, Methionine: 0.05, Phenylalanine: 0.47, Threonine: 0.22, Tryptophan: 0.05, Valine: 0.25 },
    fats: { 'Saturated Fat': 0.1, 'Monounsaturated Fat': 0.1, 'Polyunsaturated Fat': 0.3, 'Trans Fat': 0 }
  },
  {
    name: 'Green Gram (Pesara Pappu)', units: 'grams',
    macros: { Calories: 105, Protein: 7, Fat: 0.4, Carbohydrates: 19, 'Dietary Fiber': 4.8, Water: 65 },
    minerals: { Calcium: 60, Iron: 1.5, Magnesium: 55, Phosphorus: 110, Potassium: 300, Sodium: 5, Zinc: 0.9, Copper: 0.3, Selenium: 1.8, Iodine: 0.05 },
    vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 65, 'Vitamin C': 2, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.4, 'Vitamin B2': 0.05, 'Vitamin B1': 0.07 },
    aminoAcids: { Histidine: 0.5, Isoleucine: 0.35, Leucine: 0.51, Lysine: 0.17, Methionine: 0.06, Phenylalanine: 0.46, Threonine: 0.2, Tryptophan: 0.06, Valine: 0.32 },
    fats: { 'Saturated Fat': 0.1, 'Monounsaturated Fat': 0.1, 'Polyunsaturated Fat': 0.2, 'Trans Fat': 0 }
  },
  {
    name: 'Red Lentils (Erra Pappu)', units: 'grams',
    macros: { Calories: 117, Protein: 9, Fat: 0.4, Carbohydrates: 20, 'Dietary Fiber': 5, Water: 65 },
    minerals: { Calcium: 40, Iron: 1.5, Magnesium: 45, Phosphorus: 100, Potassium: 250, Sodium: 5, Zinc: 0.8, Copper: 0.2, Selenium: 1.5, Iodine: 0.05 },
    vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 70, 'Vitamin C': 1, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.4, 'Vitamin B2': 0.05, 'Vitamin B1': 0.07 },
    aminoAcids: { Histidine: 0.54, Isoleucine: 0.27, Leucine: 0.47, Lysine: 0.16, Methionine: 0.06, Phenylalanine: 0.44, Threonine: 0.22, Tryptophan: 0.06, Valine: 0.31 },
    fats: { 'Saturated Fat': 0.1, 'Monounsaturated Fat': 0.1, 'Polyunsaturated Fat': 0.2, 'Trans Fat': 0 }
  },
  {
    name: 'Horse Gram (Ulavalu)', units: 'grams',
    macros: { Calories: 115, Protein: 8, Fat: 0.3, Carbohydrates: 19, 'Dietary Fiber': 5.5, Water: 65 },
    minerals: { Calcium: 120, Iron: 2, Magnesium: 50, Phosphorus: 110, Potassium: 260, Sodium: 5, Zinc: 0.8, Copper: 0.3, Selenium: 1.5, Iodine: 0.05 },
    vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 60, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.4, 'Vitamin B2': 0.05, 'Vitamin B1': 0.07 },
    aminoAcids: { Histidine: 0.53, Isoleucine: 0.37, Leucine: 0.54, Lysine: 0.19, Methionine: 0.07, Phenylalanine: 0.52, Threonine: 0.23, Tryptophan: 0.07, Valine: 0.39 },
    fats: { 'Saturated Fat': 0.1, 'Monounsaturated Fat': 0.1, 'Polyunsaturated Fat': 0.1, 'Trans Fat': 0 }
  },
  {
    name: 'Chickpeas (Chanagalu)', units: 'grams',
    macros: { Calories: 164, Protein: 8.9, Fat: 2.6, Carbohydrates: 27.4, 'Dietary Fiber': 7.6, Water: 65 },
    minerals: { Calcium: 49, Iron: 2.9, Magnesium: 48, Phosphorus: 126, Potassium: 291, Sodium: 7, Zinc: 1.3, Copper: 0.3, Selenium: 1.8, Iodine: 0.05 },
    vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 172, 'Vitamin C': 1.3, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.5, 'Vitamin B2': 0.06, 'Vitamin B1': 0.09 },
    aminoAcids: { Histidine: 0.57, Isoleucine: 0.32, Leucine: 0.58, Lysine: 0.16, Methionine: 0.05, Phenylalanine: 0.44, Threonine: 0.24, Tryptophan: 0.06, Valine: 0.31 },
    fats: { 'Saturated Fat': 0.3, 'Monounsaturated Fat': 0.6, 'Polyunsaturated Fat': 1.4, 'Trans Fat': 0 }
  },
  {
    name: 'Kidney Beans (Rajma)', units: 'grams',
    macros: { Calories: 127, Protein: 8.7, Fat: 0.5, Carbohydrates: 22.8, 'Dietary Fiber': 6.4, Water: 65 },
    minerals: { Calcium: 35, Iron: 2.9, Magnesium: 45, Phosphorus: 140, Potassium: 405, Sodium: 2, Zinc: 1.1, Copper: 0.3, Selenium: 1.2, Iodine: 0.05 },
    vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 130, 'Vitamin C': 1.2, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.5, 'Vitamin B2': 0.06, 'Vitamin B1': 0.09 },
    aminoAcids: { Histidine: 0.48, Isoleucine: 0.36, Leucine: 0.55, Lysine: 0.18, Methionine: 0.05, Phenylalanine: 0.5, Threonine: 0.25, Tryptophan: 0.05, Valine: 0.31 },
    fats: { 'Saturated Fat': 0.1, 'Monounsaturated Fat': 0.1, 'Polyunsaturated Fat': 0.2, 'Trans Fat': 0 }
  }];

export const cereals: Food[] = [{
  name: 'Rice', units: 'grams', macros: { Calories: 130, Protein: 2.7, Fat: 0.3, Carbohydrates: 28, 'Dietary Fiber': 0.4, Water: 68 },
  minerals: { Calcium: 10, Iron: 0.2, Magnesium: 12, Phosphorus: 50, Potassium: 35, Sodium: 1, Zinc: 0.1, Copper: 0.1, Selenium: 5, Iodine: 0.2 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 3, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.05, 'Vitamin B6': 0.05, 'Vitamin B3': 1, 'Vitamin B2': 0.02, 'Vitamin B1': 0.05 },
  aminoAcids: { Histidine: 0.1, Isoleucine: 0.18, Leucine: 0.35, Lysine: 0.15, Methionine: 0.10, Phenylalanine: 0.23, Threonine: 0.15, Tryptophan: 0.05, Valine: 0.26 },
  fats: { 'Saturated Fat': 0.06, 'Monounsaturated Fat': 0.09, 'Polyunsaturated Fat': 0.10, 'Trans Fat': 0 }
},
{
  name: 'Wheat', units: 'grams',
  macros: { Calories: 124, Protein: 3.6, Fat: 0.4, Carbohydrates: 24.1, 'Dietary Fiber': 1.3, Water: 70 },
  minerals: { Calcium: 20, Iron: 2.4, Magnesium: 40, Phosphorus: 50, Potassium: 216, Sodium: 10, Zinc: 0.5, Copper: 0.2, Selenium: 20, Iodine: 0.3 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 15, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 2.5, 'Vitamin B2': 0.05, 'Vitamin B1': 0.2 },
  aminoAcids: { Histidine: 0.23, Isoleucine: 0.36, Leucine: 0.71, Lysine: 0.23, Methionine: 0.18, Phenylalanine: 0.52, Threonine: 0.28, Tryptophan: 0.13, Valine: 0.42 },
  fats: { 'Saturated Fat': 0.07, 'Monounsaturated Fat': 0.06, 'Polyunsaturated Fat': 0.18, 'Trans Fat': 0 }
},
{
  name: 'Barley',
  units: 'grams',
  macros: { Calories: 123, Protein: 2.3, Fat: 0.4, Carbohydrates: 28.2, 'Dietary Fiber': 3.8, Water: 68 }, minerals: { Calcium: 11, Iron: 1.3, Magnesium: 33, Phosphorus: 86, Potassium: 93, Sodium: 3, Zinc: 0.6, Copper: 0.1, Selenium: 13.5, Iodine: 0.2 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 16, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.02, 'Vitamin B6': 0.03, 'Vitamin B3': 2, 'Vitamin B2': 0.05, 'Vitamin B1': 0.12 },
  aminoAcids: { Histidine: 0.05, Isoleucine: 0.08, Leucine: 0.15, Lysine: 0.08, Methionine: 0.04, Phenylalanine: 0.13, Threonine: 0.08, Tryptophan: 0.04, Valine: 0.11 },
  fats: { 'Saturated Fat': 0.08, 'Monounsaturated Fat': 0.05, 'Polyunsaturated Fat': 0.20, 'Trans Fat': 0 }
},
{
  name: 'Oats',
  units: 'grams',
  macros: { Calories: 71, Protein: 2.54, Fat: 1.52, Carbohydrates: 12, 'Dietary Fiber': 1.7, Water: 83.6 },
  minerals: { Calcium: 54, Iron: 0.9, Magnesium: 27, Phosphorus: 77, Potassium: 71, Sodium: 2, Zinc: 0.6, Copper: 0.1, Selenium: 6, Iodine: 0.05 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 6, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.05, 'Vitamin B3': 0.2, 'Vitamin B2': 0.03, 'Vitamin B1': 0.1 },
  aminoAcids: { Histidine: 0.14, Isoleucine: 0.22, Leucine: 0.43, Lysine: 0.24, Methionine: 0.12, Phenylalanine: 0.30, Threonine: 0.17, Tryptophan: 0.10, Valine: 0.30 },
  fats: { 'Saturated Fat': 0.27, 'Monounsaturated Fat': 0.41, 'Polyunsaturated Fat': 0.63, 'Trans Fat': 0 }
},
{
  name: 'Quinoa',
  units: 'grams',
  macros: { Calories: 120, Protein: 5, Fat: 2.2, Carbohydrates: 26.4, 'Dietary Fiber': 2.3, Water: 71.6 },
  minerals: { Calcium: 24, Iron: 3.5, Magnesium: 64, Phosphorus: 152, Potassium: 283, Sodium: 196, Zinc: 1.1, Copper: 0.4, Selenium: 5.2, Iodine: 0.05 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 42, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.2, 'Vitamin B6': 0.1, 'Vitamin B3': 0.4, 'Vitamin B2': 0.1, 'Vitamin B1': 0.1 },
  aminoAcids: { Histidine: 0.13, Isoleucine: 0.16, Leucine: 0.26, Lysine: 0.24, Methionine: 0.10, Phenylalanine: 0.19, Threonine: 0.13, Tryptophan: 0.05, Valine: 0.19 },
  fats: { 'Saturated Fat': 0.23, 'Monounsaturated Fat': 0.53, 'Polyunsaturated Fat': 1.17, 'Trans Fat': 0 }
}];


export const millets: Food[] = [{
  name: 'Sorghum(Jonnalu)', units: 'grams',
  macros: { Calories: 111, Protein: 3.5, Fat: 1, Carbohydrates: 25, 'Dietary Fiber': 2.5, Water: 65 },
  minerals: { Calcium: 15, Iron: 2, Magnesium: 50, Phosphorus: 80, Potassium: 150, Sodium: 5, Zinc: 0.4, Copper: 0.2, Selenium: 10, Iodine: 0.2 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 20, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 1.5, 'Vitamin B2': 0.05, 'Vitamin B1': 0.1 },
  aminoAcids: { Histidine: 0.25, Isoleucine: 0.3, Leucine: 0.6, Lysine: 0.2, Methionine: 0.15, Phenylalanine: 0.4, Threonine: 0.25, Tryptophan: 0.06, Valine: 0.35 },
  fats: { 'Saturated Fat': 0.15, 'Monounsaturated Fat': 0.25, 'Polyunsaturated Fat': 0.5, 'Trans Fat': 0 }
},
{
  name: 'Pearl Millet (Sajjalu)', units: 'grams',
  macros: { Calories: 119, Protein: 3.5, Fat: 1.2, Carbohydrates: 19, 'Dietary Fiber': 1.3, Water: 74.7 },
  minerals: { Calcium: 42, Iron: 3.9, Magnesium: 114, Phosphorus: 130, Potassium: 130, Sodium: 4, Zinc: 1.1, Copper: 0.3, Selenium: 2, Iodine: 0.05 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 45, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.9, 'Vitamin B2': 0.1, 'Vitamin B1': 0.2 },
  aminoAcids: { Histidine: 0.3, Isoleucine: 0.35, Leucine: 0.7, Lysine: 0.25, Methionine: 0.18, Phenylalanine: 0.45, Threonine: 0.28, Tryptophan: 0.07, Valine: 0.4 },
  fats: { 'Saturated Fat': 0.2, 'Monounsaturated Fat': 0.3, 'Polyunsaturated Fat': 0.6, 'Trans Fat': 0 }
},
{
  name: 'Finger Millet (Ragi)',
  units: 'grams',
  macros: { Calories: 119, Protein: 3.6, Fat: 1.3, Carbohydrates: 19, 'Dietary Fiber': 2.6, Water: 74.7 },
  minerals: { Calcium: 344, Iron: 3.9, Magnesium: 137, Phosphorus: 183, Potassium: 408, Sodium: 11, Zinc: 2.7, Copper: 0.3, Selenium: 1.2, Iodine: 0.05 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 45, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.9, 'Vitamin B2': 0.1, 'Vitamin B1': 0.2 },
  aminoAcids: { Histidine: 0.28, Isoleucine: 0.32, Leucine: 0.65, Lysine: 0.22, Methionine: 0.2, Phenylalanine: 0.42, Threonine: 0.26, Tryptophan: 0.07, Valine: 0.38 },
  fats: { 'Saturated Fat': 0.2, 'Monounsaturated Fat': 0.3, 'Polyunsaturated Fat': 0.7, 'Trans Fat': 0 }
},
{
  name: 'Foxtail Millet(Korralu)',
  units: 'grams',
  macros: { Calories: 123, Protein: 3.5, Fat: 1.2, Carbohydrates: 19, 'Dietary Fiber': 1.3, Water: 74.7 },
  minerals: { Calcium: 31, Iron: 2.8, Magnesium: 81, Phosphorus: 123, Potassium: 110, Sodium: 5, Zinc: 1, Copper: 0.3, Selenium: 1.5, Iodine: 0.05 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 45, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.9, 'Vitamin B2': 0.1, 'Vitamin B1': 0.2 },
  aminoAcids: { Histidine: 0.27, Isoleucine: 0.33, Leucine: 0.63, Lysine: 0.21, Methionine: 0.17, Phenylalanine: 0.41, Threonine: 0.25, Tryptophan: 0.06, Valine: 0.36 },
  fats: { 'Saturated Fat': 0.2, 'Monounsaturated Fat': 0.3, 'Polyunsaturated Fat': 0.6, 'Trans Fat': 0 }
},
{
  name: 'Barnyard Millet(Udalu)',
  units: 'grams',
  macros: { Calories: 120, Protein: 3.4, Fat: 1, Carbohydrates: 19, 'Dietary Fiber': 2.5, Water: 75 },
  minerals: { Calcium: 11, Iron: 1.5, Magnesium: 75, Phosphorus: 210, Potassium: 195, Sodium: 9, Zinc: 1.2, Copper: 0.3, Selenium: 1.5, Iodine: 0.05 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 45, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.8, 'Vitamin B2': 0.1, 'Vitamin B1': 0.2 },
  aminoAcids: { Histidine: 0.26, Isoleucine: 0.31, Leucine: 0.6, Lysine: 0.2, Methionine: 0.16, Phenylalanine: 0.39, Threonine: 0.24, Tryptophan: 0.06, Valine: 0.34 },
  fats: { 'Saturated Fat': 0.15, 'Monounsaturated Fat': 0.25, 'Polyunsaturated Fat': 0.5, 'Trans Fat': 0 }
},
{
  name: 'Little Millet(Samalu)',
  units: 'grams',
  macros: { Calories: 118, Protein: 3.1, Fat: 1, Carbohydrates: 19, 'Dietary Fiber': 2.3, Water: 75 },
  minerals: { Calcium: 17, Iron: 2.5, Magnesium: 119, Phosphorus: 283, Potassium: 207, Sodium: 5, Zinc: 1.7, Copper: 0.3, Selenium: 1.5, Iodine: 0.05 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 45, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.8, 'Vitamin B2': 0.1, 'Vitamin B1': 0.2 },
  aminoAcids: { Histidine: 0.28, Isoleucine: 0.34, Leucine: 0.66, Lysine: 0.23, Methionine: 0.18, Phenylalanine: 0.43, Threonine: 0.26, Tryptophan: 0.07, Valine: 0.37 },
  fats: { 'Saturated Fat': 0.15, 'Monounsaturated Fat': 0.25, 'Polyunsaturated Fat': 0.5, 'Trans Fat': 0 }
},
{
  name: 'Proso Millet(Varigelu)',
  units: 'grams',
  macros: { Calories: 120, Protein: 3.5, Fat: 1.2, Carbohydrates: 19, 'Dietary Fiber': 1.7, Water: 75 },
  minerals: { Calcium: 9, Iron: 2.5, Magnesium: 81, Phosphorus: 123, Potassium: 110, Sodium: 5, Zinc: 1, Copper: 0.3, Selenium: 1.5, Iodine: 0.05 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 45, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.8, 'Vitamin B2': 0.1, 'Vitamin B1': 0.2 },
  aminoAcids: { Histidine: 0.27, Isoleucine: 0.33, Leucine: 0.64, Lysine: 0.22, Methionine: 0.17, Phenylalanine: 0.42, Threonine: 0.25, Tryptophan: 0.06, Valine: 0.36 },
  fats: { 'Saturated Fat': 0.2, 'Monounsaturated Fat': 0.3, 'Polyunsaturated Fat': 0.6, 'Trans Fat': 0 }
},
{
  name: 'Kodo Millet(Arikelu)', units: 'grams',
  macros: { Calories: 120, Protein: 3.6, Fat: 1.3, Carbohydrates: 19, 'Dietary Fiber': 2.6, Water: 75 },
  minerals: { Calcium: 27, Iron: 1.7, Magnesium: 110, Phosphorus: 150, Potassium: 150, Sodium: 6, Zinc: 1.2, Copper: 0.3, Selenium: 1.5, Iodine: 0.05 },
  vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 45, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.8, 'Vitamin B2': 0.1, 'Vitamin B1': 0.2 },
  aminoAcids: { Histidine: 0.26, Isoleucine: 0.32, Leucine: 0.62, Lysine: 0.21, Methionine: 0.16, Phenylalanine: 0.4, Threonine: 0.24, Tryptophan: 0.06, Valine: 0.35 },
  fats: { 'Saturated Fat': 0.2, 'Monounsaturated Fat': 0.3, 'Polyunsaturated Fat': 0.7, 'Trans Fat': 0 }
}];

export const dairyFoods: Food[] = [{
  name: 'Milk', units: 'milliLitres', macros: { Calories: 61, Protein: 3.3, Fat: 3.5, Carbohydrates: 5, 'Dietary Fiber': 0, Water: 88 },
  minerals: { Calcium: 125, Iron: 0.03, Magnesium: 11, Phosphorus: 95, Potassium: 150, Sodium: 44, Zinc: 0.4, Copper: 0.01, Iodine: 35, Selenium: 2.4 },
  vitamins: { 'Vitamin A': 0.047, 'Vitamin B12': 0.0004, 'Vitamin B9': 5, 'Vitamin C': 1, 'Vitamin D': 1.25, 'Vitamin E': 0.1, 'Vitamin B6': 0.04, 'Vitamin B3': 0.1, 'Vitamin B2': 0.18, 'Vitamin B1': 0.04 },
  aminoAcids: { Histidine: 0.1, Isoleucine: 0.15, Leucine: 0.25, Lysine: 0.23, Methionine: 0.07, Phenylalanine: 0.13, Threonine: 0.11, Tryptophan: 0.04, Valine: 0.17 },
  fats: { 'Saturated Fat': 2.2, 'Monounsaturated Fat': 1.0, 'Polyunsaturated Fat': 0.1, 'Trans Fat': 0.1 }
},
{
  name: 'Curd', units: 'grams', macros: { Calories: 61, Protein: 3.1, Fat: 4, Carbohydrates: 4.7, 'Dietary Fiber': 0, Water: 88 },
  minerals: { Calcium: 120, Iron: 0.1, Magnesium: 12, Phosphorus: 95, Potassium: 155, Sodium: 36, Zinc: 0.5, Copper: 0.02, Selenium: 2, Iodine: 0.4 },
  vitamins: { 'Vitamin A': 50, 'Vitamin B12': 0.4, 'Vitamin B9': 7, 'Vitamin C': 1, 'Vitamin D': 0.1, 'Vitamin E': 0.1, 'Vitamin B6': 0.05, 'Vitamin B3': 0.1, 'Vitamin B2': 0.2, 'Vitamin B1': 0.04 },
  aminoAcids: { Histidine: 0.1, Isoleucine: 0.14, Leucine: 0.23, Lysine: 0.21, Methionine: 0.06, Phenylalanine: 0.12, Threonine: 0.1, Tryptophan: 0.03, Valine: 0.16 },
  fats: { 'Saturated Fat': 2.5, 'Monounsaturated Fat': 1.1, 'Polyunsaturated Fat': 0.1, 'Trans Fat': 0.1 }
},
{
  name: 'Ghee', units: 'grams', macros: { Calories: 897, Protein: 0, Fat: 99.8, Carbohydrates: 0, 'Dietary Fiber': 0, Water: 0.1 },
  minerals: { Calcium: 1, Iron: 0.1, Magnesium: 0, Phosphorus: 3, Potassium: 5, Sodium: 2, Zinc: 0.01, Copper: 0.01, Selenium: 0.4, Iodine: 0.2 },
  vitamins: { 'Vitamin A': 3069, 'Vitamin B12': 0.01, 'Vitamin B9': 0, 'Vitamin C': 0, 'Vitamin D': 2, 'Vitamin E': 2.8, 'Vitamin B6': 0, 'Vitamin B3': 0, 'Vitamin B2': 0.01, 'Vitamin B1': 0.01 },
  aminoAcids: { Histidine: 0, Isoleucine: 0, Leucine: 0, Lysine: 0, Methionine: 0, Phenylalanine: 0, Threonine: 0, Tryptophan: 0, Valine: 0 },
  fats: { 'Saturated Fat': 61.9, 'Monounsaturated Fat': 28.7, 'Polyunsaturated Fat': 3.7, 'Trans Fat': 4.0 }
},
{
  name: 'Butter (Salted)', units: 'grams', macros: { Calories: 717, Protein: 0.85, Fat: 81.1, Carbohydrates: 0.06, 'Dietary Fiber': 0, Water: 15.9 },
  minerals: { Calcium: 24, Iron: 0.1, Magnesium: 2, Phosphorus: 24, Potassium: 112, Sodium: 643, Zinc: 0.1, Copper: 0.02, Selenium: 1, Iodine: 0.2 },
  vitamins: { 'Vitamin A': 684, 'Vitamin B12': 0.17, 'Vitamin B9': 3, 'Vitamin C': 0, 'Vitamin D': 1, 'Vitamin E': 2.3, 'Vitamin B6': 0.01, 'Vitamin B3': 0.1, 'Vitamin B2': 0.04, 'Vitamin B1': 0.02 },
  aminoAcids: { Histidine: 0.01, Isoleucine: 0.02, Leucine: 0.03, Lysine: 0.03, Methionine: 0.01, Phenylalanine: 0.02, Threonine: 0.02, Tryptophan: 0.01, Valine: 0.02 },
  fats: { 'Saturated Fat': 51.4, 'Monounsaturated Fat': 21.0, 'Polyunsaturated Fat': 3.0, 'Trans Fat': 3.3 }
},
{
  name: 'Cheese', units: 'grams', macros: { Calories: 402, Protein: 25, Fat: 33, Carbohydrates: 1.3, 'Dietary Fiber': 0, Water: 37 },
  minerals: { Calcium: 721, Iron: 0.7, Magnesium: 28, Phosphorus: 512, Potassium: 98, Sodium: 621, Zinc: 3.1, Copper: 0.03, Selenium: 14.5, Iodine: 0.2 },
  vitamins: { 'Vitamin A': 330, 'Vitamin B12': 1.5, 'Vitamin B9': 18, 'Vitamin C': 0, 'Vitamin D': 0.6, 'Vitamin E': 0.3, 'Vitamin B6': 0.07, 'Vitamin B3': 0.1, 'Vitamin B2': 0.35, 'Vitamin B1': 0.03 },
  aminoAcids: { Histidine: 0.4, Isoleucine: 0.6, Leucine: 1, Lysine: 0.9, Methionine: 0.3, Phenylalanine: 0.5, Threonine: 0.4, Tryptophan: 0.1, Valine: 0.7 },
  fats: { 'Saturated Fat': 21.0, 'Monounsaturated Fat': 8.6, 'Polyunsaturated Fat': 0.9, 'Trans Fat': 1.0 }
},
{
  name: 'Paneer', units: 'grams', macros: { Calories: 296, Protein: 18.3, Fat: 20.8, Carbohydrates: 1.2, 'Dietary Fiber': 0, Water: 55 },
  minerals: { Calcium: 480, Iron: 0.2, Magnesium: 23, Phosphorus: 208, Potassium: 104, Sodium: 22, Zinc: 2, Copper: 0.03, Selenium: 11, Iodine: 0.2 },
  vitamins: { 'Vitamin A': 210, 'Vitamin B12': 1.1, 'Vitamin B9': 20, 'Vitamin C': 0, 'Vitamin D': 0.5, 'Vitamin E': 0.1, 'Vitamin B6': 0.05, 'Vitamin B3': 0.2, 'Vitamin B2': 0.2, 'Vitamin B1': 0.05 },
  aminoAcids: { Histidine: 0.3, Isoleucine: 0.5, Leucine: 0.9, Lysine: 0.8, Methionine: 0.2, Phenylalanine: 0.4, Threonine: 0.3, Tryptophan: 0.1, Valine: 0.6 },
  fats: { 'Saturated Fat': 13.1, 'Monounsaturated Fat': 5.4, 'Polyunsaturated Fat': 0.5, 'Trans Fat': 0.6 }
}];

export const liquids: Food[] = [
  {
    name: 'Water',
    units: 'ml',
    macros: { Calories: 0, Protein: 0, Fat: 0, Carbohydrates: 0, 'Dietary Fiber': 0, Water: 100 },
    minerals: { Calcium: 3, Iron: 0.01, Magnesium: 1, Phosphorus: 0, Potassium: 0.2, Sodium: 1, Zinc: 0.01, Copper: 0.005, Iodine: 0.5, Selenium: 0.001 },
    vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 0, 'Vitamin C': 0, 'Vitamin D': 0, 'Vitamin E': 0, 'Vitamin B6': 0, 'Vitamin B3': 0, 'Vitamin B2': 0, 'Vitamin B1': 0 }, aminoAcids: { Histidine: 0, Isoleucine: 0, Leucine: 0, Lysine: 0, Methionine: 0, Phenylalanine: 0, Threonine: 0, Tryptophan: 0, Valine: 0 },
    fats: { 'Saturated Fat': 0, 'Monounsaturated Fat': 0, 'Polyunsaturated Fat': 0, 'Trans Fat': 0 }
  },
  {
    name: 'Coconut Water',
    units: 'grams',
    macros: { Calories: 19, Protein: 0.7, Fat: 0.2, Carbohydrates: 3.9, 'Dietary Fiber': 1.1, Water: 94 }, minerals: { Calcium: 24, Iron: 0.3, Magnesium: 25, Phosphorus: 20, Potassium: 250, Sodium: 105, Zinc: 0.1, Copper: 0.04, Selenium: 0.4, Iodine: 0.2 }, vitamins: { 'Vitamin A': 0, 'Vitamin B12': 0, 'Vitamin B9': 3, 'Vitamin C': 2.4, 'Vitamin D': 0, 'Vitamin E': 0.1, 'Vitamin B6': 0.03, 'Vitamin B3': 0.1, 'Vitamin B2': 0.01, 'Vitamin B1': 0.02 },
    aminoAcids: { Histidine: 0.005, Isoleucine: 0.01, Leucine: 0.018, Lysine: 0.014, Methionine: 0.004, Phenylalanine: 0.013, Threonine: 0.011, Tryptophan: 0.002, Valine: 0.016 },
    fats: { 'Saturated Fat': 0.18, 'Monounsaturated Fat': 0.01, 'Polyunsaturated Fat': 0.01, 'Trans Fat': 0 }
  }];

export const fruits: Food[] = [
  {
    name: "Banana",
    units: "grams",
    macros: {
      Protein: 1.1,
      Fat: 0.3,
      Carbohydrates: 22.8,
      "Dietary Fiber": 2.6,
      Water: 74.9,
      Calories: 89
    },
    minerals: {
      Calcium: 17, Iron: 0.3, Magnesium: 27, Phosphorus: 22, Potassium: 358, Sodium: 1,
      Zinc: 0.2, Copper: 0.1, Selenium: 1, Iodine: 0.2
    },
    vitamins: {
      "Vitamin A": 64, "Vitamin B12": 0, "Vitamin B9": 20, "Vitamin C": 8.7,
      "Vitamin D": 0, "Vitamin E": 0.1, "Vitamin B6": 0.4, "Vitamin B3": 0.7, "Vitamin B2": 0.1,
      "Vitamin B1": 0.03
    },
    aminoAcids: {
      Histidine: 0.019, Isoleucine: 0.028, Leucine: 0.05,
      Lysine: 0.045, Methionine: 0.01, Phenylalanine: 0.03, Threonine: 0.025, Tryptophan: 0.009,
      Valine: 0.04
    },
    fats: {
      "Saturated Fat": 0.1,
      "Monounsaturated Fat": 0.03,
      "Polyunsaturated Fat": 0.07,
      "Trans Fat": 0
    }
  },
  {
    name: "Apple",
    units: "grams",
    macros: {
      Protein: 0.3, Fat: 0.2,
      Carbohydrates: 13.8, "Dietary Fiber": 2.4, Water: 85.6, Calories: 52
    },
    minerals: {
      Calcium: 10, Iron: 0.1, Magnesium: 5, Phosphorus: 11, Potassium: 107, Sodium: 1,
      Zinc: 0.1, Copper: 0, Selenium: 0.6, Iodine: 0.1
    },
    vitamins: {
      "Vitamin A": 54, "Vitamin B12": 0, "Vitamin B9": 3, "Vitamin C": 4.6,
      "Vitamin D": 0, "Vitamin E": 0.2, "Vitamin B6": 0.04, "Vitamin B3": 0.1, "Vitamin B2": 0.03,
      "Vitamin B1": 0.02
    },
    aminoAcids: {
      Histidine: 0.015, Isoleucine: 0.02, Leucine: 0.035,
      Lysine: 0.03, Methionine: 0.008, Phenylalanine: 0.025, Threonine: 0.02, Tryptophan: 0.006,
      Valine: 0.03
    },
    fats: {
      "Saturated Fat": 0.03, "Monounsaturated Fat": 0.01,
      "Polyunsaturated Fat": 0.05, "Trans Fat": 0
    }
  },
  {
    name: "Orange", units: "grams",
    macros: {
      Protein: 1.3, Fat: 0.2, Carbohydrates: 16.5, "Dietary Fiber": 2.8,
      Water: 86, Calories: 47
    },
    minerals: {
      Calcium: 40, Iron: 0.1, Magnesium: 10, Phosphorus: 14, Potassium: 181,
      Sodium: 1, Zinc: 0.07, Copper: 0.045, Selenium: 0.5, Iodine: 0.2
    },
    vitamins: {
      "Vitamin A": 225, "Vitamin B12": 0, "Vitamin B9": 30,
      "Vitamin C": 53.2, "Vitamin D": 0, "Vitamin E": 0.2, "Vitamin B6": 0.06, "Vitamin B3": 0.4, "Vitamin B2": 0.04, "Vitamin B1": 0.1
    },
    aminoAcids: { Histidine: 0.02, Isoleucine: 0.03, Leucine: 0.055, Lysine: 0.05, Methionine: 0.012, Phenylalanine: 0.035, Threonine: 0.03, Tryptophan: 0.01, Valine: 0.045 },
    fats: { "Saturated Fat": 0.02, "Monounsaturated Fat": 0.03, "Polyunsaturated Fat": 0.05, "Trans Fat": 0 }
  },
  {
    name: "Lemon",
    units: "grams",
    macros: { Protein: 1.1, Fat: 0.3, Carbohydrates: 9.3, "Dietary Fiber": 2.8, Water: 89, Calories: 29 },
    minerals: { Calcium: 26, Iron: 0.6, Magnesium: 8, Phosphorus: 16, Potassium: 138, Sodium: 2, Zinc: 0.05, Copper: 0.037, Selenium: 0.4, Iodine: 0.2 },
    vitamins: { "Vitamin A": 22, "Vitamin B12": 0, "Vitamin B9": 11, "Vitamin C": 53, "Vitamin D": 0, "Vitamin E": 0.2, "Vitamin B6": 0.08, "Vitamin B3": 0.1, "Vitamin B2": 0.02, "Vitamin B1": 0.04 },
    aminoAcids: { Histidine: 0.012, Isoleucine: 0.018, Leucine: 0.032, Lysine: 0.028, Methionine: 0.007, Phenylalanine: 0.02, Threonine: 0.018, Tryptophan: 0.005, Valine: 0.025 },
    fats: { "Saturated Fat": 0.04, "Monounsaturated Fat": 0.01, "Polyunsaturated Fat": 0.07, "Trans Fat": 0 }
  },
  {
    name: "Custard Apple",
    units: "grams",
    macros: { Protein: 1.7, Fat: 0.4, Carbohydrates: 23.6, "Dietary Fiber": 3, Water: 70, Calories: 94 },
    minerals: { Calcium: 30, Iron: 0.6, Magnesium: 18, Phosphorus: 21, Potassium: 382, Sodium: 4, Zinc: 0.1, Copper: 0.09, Selenium: 0.6, Iodine: 0.2 },
    vitamins: { "Vitamin A": 5, "Vitamin B12": 0, "Vitamin B9": 14, "Vitamin C": 36.3, "Vitamin D": 0, "Vitamin E": 0.4, "Vitamin B6": 0.2, "Vitamin B3": 0.5, "Vitamin B2": 0.1, "Vitamin B1": 0.08 },
    aminoAcids: { Histidine: 0.025, Isoleucine: 0.035, Leucine: 0.065, Lysine: 0.055, Methionine: 0.015, Phenylalanine: 0.04, Threonine: 0.035, Tryptophan: 0.012, Valine: 0.05 },
    fats: { "Saturated Fat": 0.1, "Monounsaturated Fat": 0.1, "Polyunsaturated Fat": 0.1, "Trans Fat": 0 }
  },
  {
    name: "Watermelon",
    units: "grams",
    macros: { Protein: 0.6, Fat: 0.2, Carbohydrates: 7.6, "Dietary Fiber": 0.4, Water: 91.5, Calories: 30 },
    minerals: { Calcium: 7, Iron: 0.2, Magnesium: 10, Phosphorus: 11, Potassium: 112, Sodium: 1, Zinc: 0.1, Copper: 0.04, Selenium: 0.4, Iodine: 0.2 },
    vitamins: { "Vitamin A": 569, "Vitamin B12": 0, "Vitamin B9": 3, "Vitamin C": 8.1, "Vitamin D": 0, "Vitamin E": 0.05, "Vitamin B6": 0.045, "Vitamin B3": 0.2, "Vitamin B2": 0.02, "Vitamin B1": 0.03 },
    aminoAcids: { Histidine: 0.01, Isoleucine: 0.015, Leucine: 0.03, Lysine: 0.025, Methionine: 0.006, Phenylalanine: 0.02, Threonine: 0.018, Tryptophan: 0.004, Valine: 0.022 },
    fats: { "Saturated Fat": 0.02, "Monounsaturated Fat": 0.03, "Polyunsaturated Fat": 0.05, "Trans Fat": 0 }
  },
  {
    name: "Pomegranate",
    units: "grams",
    macros: { Protein: 1.7, Fat: 0.3, Carbohydrates: 19, "Dietary Fiber": 4, Water: 77, Calories: 83 },
    minerals: { Calcium: 10, Iron: 0.3, Magnesium: 12, Phosphorus: 36, Potassium: 236, Sodium: 3, Zinc: 0.4, Copper: 0.2, Selenium: 0.6, Iodine: 0.2 },
    vitamins: { "Vitamin A": 0, "Vitamin B12": 0, "Vitamin B9": 27, "Vitamin C": 10.2, "Vitamin D": 0, "Vitamin E": 0.6, "Vitamin B6": 0.075, "Vitamin B3": 0.3, "Vitamin B2": 0.03, "Vitamin B1": 0.07 },
    aminoAcids: { Histidine: 0.022, Isoleucine: 0.032, Leucine: 0.058, Lysine: 0.048, Methionine: 0.011, Phenylalanine: 0.038, Threonine: 0.03, Tryptophan: 0.009, Valine: 0.042 },
    fats: { "Saturated Fat": 0.05, "Monounsaturated Fat": 0.05, "Polyunsaturated Fat": 0.1, "Trans Fat": 0 }
  },
  {
    name: "Pineapple",
    units: "grams",
    macros: { Protein: 0.5, Fat: 0.1, Carbohydrates: 13, "Dietary Fiber": 1, Water: 86, Calories: 50 },
    minerals: { Calcium: 13, Iron: 0.3, Magnesium: 12, Phosphorus: 8, Potassium: 109, Sodium: 1, Zinc: 0.1, Copper: 0.1, Selenium: 0.6, Iodine: 0.1 },
    vitamins: { "Vitamin A": 58, "Vitamin B12": 0, "Vitamin B9": 18, "Vitamin C": 47.8, "Vitamin D": 0, "Vitamin E": 0.02, "Vitamin B6": 0.11, "Vitamin B3": 0.5, "Vitamin B2": 0.03, "Vitamin B1": 0.08 },
    aminoAcids: { Histidine: 0.018, Isoleucine: 0.026, Leucine: 0.048, Lysine: 0.04, Methionine: 0.01, Phenylalanine: 0.03, Threonine: 0.025, Tryptophan: 0.008, Valine: 0.035 },
    fats: { "Saturated Fat": 0.01, "Monounsaturated Fat": 0.01, "Polyunsaturated Fat": 0.04, "Trans Fat": 0 }
  },
  {
    name: "Guava",
    units: "grams",
    macros: { Protein: 2.6, Fat: 0.9, Carbohydrates: 14.3, "Dietary Fiber": 5.4, Water: 80.8, Calories: 68 },
    minerals: { Calcium: 18, Iron: 0.3, Magnesium: 22, Phosphorus: 40, Potassium: 417, Sodium: 2, Zinc: 0.2, Copper: 0.2, Selenium: 0.6, Iodine: 0.1 },
    vitamins: { "Vitamin A": 624, "Vitamin B12": 0, "Vitamin B9": 49, "Vitamin C": 228.3, "Vitamin D": 0, "Vitamin E": 0.7, "Vitamin B6": 0.11, "Vitamin B3": 1.1, "Vitamin B2": 0.04, "Vitamin B1": 0.07 },
    aminoAcids: { Histidine: 0.03, Isoleucine: 0.045, Leucine: 0.08, Lysine: 0.065, Methionine: 0.018, Phenylalanine: 0.05, Threonine: 0.04, Tryptophan: 0.013, Valine: 0.06 },
    fats: { "Saturated Fat": 0.27, "Monounsaturated Fat": 0.09, "Polyunsaturated Fat": 0.34, "Trans Fat": 0 }
  },
  {
    name: "Mango",
    units: "grams",
    macros: { Protein: 0.8, Fat: 0.4, Carbohydrates: 15, "Dietary Fiber": 1.6, Water: 83.5, Calories: 60 },
    minerals: { Calcium: 11, Iron: 0.2, Magnesium: 10, Phosphorus: 14, Potassium: 168, Sodium: 1, Zinc: 0.1, Copper: 0.1, Selenium: 0.6, Iodine: 0.1 },
    vitamins: { "Vitamin A": 1082, "Vitamin B12": 0, "Vitamin B9": 43, "Vitamin C": 36.4, "Vitamin D": 0, "Vitamin E": 0.9, "Vitamin B6": 0.12, "Vitamin B3": 0.6, "Vitamin B2": 0.05, "Vitamin B1": 0.03 },
    aminoAcids: { Histidine: 0.021, Isoleucine: 0.031, Leucine: 0.056, Lysine: 0.045, Methionine: 0.012, Phenylalanine: 0.035, Threonine: 0.028, Tryptophan: 0.009, Valine: 0.038 },
    fats: { "Saturated Fat": 0.09, "Monounsaturated Fat": 0.14, "Polyunsaturated Fat": 0.07, "Trans Fat": 0 }
  },
  {
    name: "Strawberry (Raw)",
    units: "grams",
    macros: { Protein: 1, Fat: 0.5, Carbohydrates: 11.7, "Dietary Fiber": 3, Water: 90, Calories: 32 },
    minerals: { Calcium: 24, Iron: 0.6, Magnesium: 20, Phosphorus: 22, Potassium: 233, Sodium: 1.5, Zinc: 0.2, Copper: 0.05, Selenium: 0.4, Iodine: 0.2 },
    vitamins: { "Vitamin A": 1, "Vitamin B12": 0, "Vitamin B9": 24, "Vitamin C": 89.4, "Vitamin D": 0, "Vitamin E": 0.3, "Vitamin B6": 0.06, "Vitamin B3": 0.4, "Vitamin B2": 0.03, "Vitamin B1": 0.03 },
    aminoAcids: { Histidine: 0.016, Isoleucine: 0.024, Leucine: 0.042, Lysine: 0.035, Methionine: 0.009, Phenylalanine: 0.027, Threonine: 0.022, Tryptophan: 0.007, Valine: 0.03 },
    fats: { "Saturated Fat": 0.02, "Monounsaturated Fat": 0.06, "Polyunsaturated Fat": 0.28, "Trans Fat": 0 }
  },
  {
    name: "Dragon Fruit (Raw)",
    units: "grams",
    macros: { Protein: 1.2, Fat: 0.1, Carbohydrates: 13, "Dietary Fiber": 3, Water: 84, Calories: 50 },
    minerals: { Calcium: 18, Iron: 0.7, Magnesium: 40, Phosphorus: 25, Potassium: 280, Sodium: 9, Zinc: 0.1, Copper: 0.1, Selenium: 0.4, Iodine: 0.2 },
    vitamins: { "Vitamin A": 59, "Vitamin B12": 0, "Vitamin B9": 7, "Vitamin C": 20.5, "Vitamin D": 0, "Vitamin E": 0.1, "Vitamin B6": 0.04, "Vitamin B3": 0.2, "Vitamin B2": 0.05, "Vitamin B1": 0.03 },
    aminoAcids: { Histidine: 0.02, Isoleucine: 0.03, Leucine: 0.055, Lysine: 0.045, Methionine: 0.012, Phenylalanine: 0.035, Threonine: 0.028, Tryptophan: 0.01, Valine: 0.04 },
    fats: { "Saturated Fat": 0.03, "Monounsaturated Fat": 0.02, "Polyunsaturated Fat": 0.05, "Trans Fat": 0 }
  },
  {
    name: "Kiwi (Raw)",
    units: "grams",
    macros: { Protein: 1.1, Fat: 0.5, Carbohydrates: 14.7, "Dietary Fiber": 3, Water: 83, Calories: 61 },
    minerals: { Calcium: 34, Iron: 0.3, Magnesium: 17, Phosphorus: 34, Potassium: 312, Sodium: 3, Zinc: 0.1, Copper: 0.1, Selenium: 0.4, Iodine: 0.2 },
    vitamins: { "Vitamin A": 87, "Vitamin B12": 0, "Vitamin B9": 25, "Vitamin C": 92.7, "Vitamin D": 0, "Vitamin E": 1.5, "Vitamin B6": 0.06, "Vitamin B3": 0.3, "Vitamin B2": 0.03, "Vitamin B1": 0.02 },
    aminoAcids: { Histidine: 0.025, Isoleucine: 0.038, Leucine: 0.068, Lysine: 0.055, Methionine: 0.014, Phenylalanine: 0.042, Threonine: 0.034, Tryptophan: 0.011, Valine: 0.048 },
    fats: { "Saturated Fat": 0.03, "Monounsaturated Fat": 0.05, "Polyunsaturated Fat": 0.29, "Trans Fat": 0 }
  },
  {
    name: "Blueberry (Raw)",
    units: "grams",
    macros: { Protein: 1, Fat: 0.5, Carbohydrates: 14.5, "Dietary Fiber": 3.6, Water: 84, Calories: 57 },
    minerals: { Calcium: 6, Iron: 0.3, Magnesium: 6, Phosphorus: 12, Potassium: 77, Sodium: 1.5, Zinc: 0.2, Copper: 0.05, Selenium: 0.4, Iodine: 0.2 },
    vitamins: { "Vitamin A": 54, "Vitamin B12": 0, "Vitamin B9": 6, "Vitamin C": 14.4, "Vitamin D": 0, "Vitamin E": 0.8, "Vitamin B6": 0.1, "Vitamin B3": 0.4, "Vitamin B2": 0.05, "Vitamin B1": 0.03 },
    aminoAcids: { Histidine: 0.014, Isoleucine: 0.021, Leucine: 0.038, Lysine: 0.03, Methionine: 0.008, Phenylalanine: 0.025, Threonine: 0.02, Tryptophan: 0.006, Valine: 0.028 }, 
    fats: { "Saturated Fat": 0.03, "Monounsaturated Fat": 0.05, "Polyunsaturated Fat": 0.25, "Trans Fat": 0 }
  },
  {
    name: "Grapes (Raw)",
    units: "grams", macros: { Protein: 0.7, Fat: 0.2, Carbohydrates: 17.1, "Dietary Fiber": 0.9, Water: 81, Calories: 69 },
    minerals: { Calcium: 10, Iron: 0.4, Magnesium: 7, Phosphorus: 20, Potassium: 191, Sodium: 2, Zinc: 0.1, Copper: 0.1, Selenium: 0.3, Iodine: 0.2 },
    vitamins: { "Vitamin A": 66, "Vitamin B12": 0, "Vitamin B9": 2, "Vitamin C": 10.8, "Vitamin D": 0, "Vitamin E": 0.2, "Vitamin B6": 0.1, "Vitamin B3": 0.3, "Vitamin B2": 0.05, "Vitamin B1": 0.05 },
    aminoAcids: { Histidine: 0.017, Isoleucine: 0.026, Leucine: 0.047, Lysine: 0.038, Methionine: 0.01, Phenylalanine: 0.03, Threonine: 0.024, Tryptophan: 0.008, Valine: 0.032 },
    fats: { "Saturated Fat": 0.05, "Monounsaturated Fat": 0.01, "Polyunsaturated Fat": 0.08, "Trans Fat": 0 }
  },
  {
    name: "Jackfruit (Raw)",
    units: "grams", macros: { Protein: 1.7, Fat: 0.6, Carbohydrates: 23.2, "Dietary Fiber": 2.8, Water: 73, Calories: 95 },
    minerals: { Calcium: 34, Iron: 0.6, Magnesium: 37, Phosphorus: 21, Potassium: 303, Sodium: 3, Zinc: 0.1, Copper: 0.1, Selenium: 0.4, Iodine: 0.2 },
    vitamins: { "Vitamin A": 110, "Vitamin B12": 0, "Vitamin B9": 24, "Vitamin C": 13.7, "Vitamin D": 0, "Vitamin E": 0.2, "Vitamin B6": 0.3, "Vitamin B3": 0.9, "Vitamin B2": 0.06, "Vitamin B1": 0.03 },
    aminoAcids: { Histidine: 0.028, Isoleucine: 0.042, Leucine: 0.075, Lysine: 0.06, Methionine: 0.016, Phenylalanine: 0.045, Threonine: 0.036, Tryptophan: 0.012, Valine: 0.05 },
    fats: { "Saturated Fat": 0.2, "Monounsaturated Fat": 0.1, "Polyunsaturated Fat": 0.2, "Trans Fat": 0 }
  },
  {
    name: "Papaya (Raw)", units: "grams", 
    macros: { Protein: 0.5, Fat: 0.3, Carbohydrates: 11, "Dietary Fiber": 1.7, Water: 88, Calories: 43 },
    minerals: { Calcium: 20, Iron: 0.3, Magnesium: 21, Phosphorus: 10, Potassium: 182, Sodium: 8, Zinc: 0.1, Copper: 0.03, Selenium: 0.6, Iodine: 0.2 },
    vitamins: { "Vitamin A": 950, "Vitamin B12": 0, "Vitamin B9": 38, "Vitamin C": 60.9, "Vitamin D": 0, "Vitamin E": 0.3, "Vitamin B6": 0.04, "Vitamin B3": 0.3, "Vitamin B2": 0.03, "Vitamin B1": 0.02 },
    aminoAcids: { Histidine: 0.02, Isoleucine: 0.03, Leucine: 0.055, Lysine: 0.045, Methionine: 0.012, Phenylalanine: 0.035, Threonine: 0.028, Tryptophan: 0.009, Valine: 0.04 },
    fats: { "Saturated Fat": 0.08, "Monounsaturated Fat": 0.07, "Polyunsaturated Fat": 0.07, "Trans Fat": 0 }
  }, 
  {
    name: "Sapota (Chikoo)", units: "grams",
    macros: { Protein: 0.7, Fat: 1.1, Carbohydrates: 20, "Dietary Fiber": 5.3, Water: 73, Calories: 83 },
    minerals: { Calcium: 21, Iron: 0.8, Magnesium: 12, Phosphorus: 12, Potassium: 193, Sodium: 12, Zinc: 0.1, Copper: 0.1, Selenium: 0.4, Iodine: 0.2 },
    vitamins: { "Vitamin A": 60, "Vitamin B12": 0, "Vitamin B9": 14, "Vitamin C": 14.7, "Vitamin D": 0, "Vitamin E": 0.9, "Vitamin B6": 0.04, "Vitamin B3": 0.2, "Vitamin B2": 0.02, "Vitamin B1": 0.01 },
    aminoAcids: { Histidine: 0.022, Isoleucine: 0.034, Leucine: 0.06, Lysine: 0.048, Methionine: 0.014, Phenylalanine: 0.038, Threonine: 0.03, Tryptophan: 0.01, Valine: 0.042 },
    fats: { "Saturated Fat": 0.3, "Monounsaturated Fat": 0.4, "Polyunsaturated Fat": 0.2, "Trans Fat": 0 }
  },
  {
    name: "Jamun (Java Plum)", units: "grams", 
    macros: { Protein: 0.7, Fat: 0.2, Carbohydrates: 14, "Dietary Fiber": 0.9, Water: 84, Calories: 62 },
    minerals: { Calcium: 15, Iron: 1.2, Magnesium: 18, Phosphorus: 15, Potassium: 79, Sodium: 26, Zinc: 0.1, Copper: 0.05, Selenium: 0.4, Iodine: 0.2 },
    vitamins: { "Vitamin A": 3, "Vitamin B12": 0, "Vitamin B9": 3, "Vitamin C": 18, "Vitamin D": 0, "Vitamin E": 0.2, "Vitamin B6": 0.02, "Vitamin B3": 0.3, "Vitamin B2": 0.01, "Vitamin B1": 0.01 },
    aminoAcids: { Histidine: 0.026, Isoleucine: 0.038, Leucine: 0.065, Lysine: 0.052, Methionine: 0.014, Phenylalanine: 0.04, Threonine: 0.032, Tryptophan: 0.01, Valine: 0.045 },
    fats: { "Saturated Fat": 0.05, "Monounsaturated Fat": 0.05, "Polyunsaturated Fat": 0.07, "Trans Fat": 0 }
  },
  {
    name: "Ber (Indian Jujube)", units: "grams",
    macros: { Protein: 0.9, Fat: 0.1, Carbohydrates: 10.2, "Dietary Fiber": 4.3, Water: 86, Calories: 44 },
    minerals: { Calcium: 25, Iron: 0.3, Magnesium: 10, Phosphorus: 27, Potassium: 198, Sodium: 1, Zinc: 0.1, Copper: 0.1, Selenium: 0.5, Iodine: 0.2 },
    vitamins: { "Vitamin A": 9, "Vitamin B12": 0, "Vitamin B9": 6, "Vitamin C": 478, "Vitamin D": 0, "Vitamin E": 0.1, "Vitamin B6": 0.05, "Vitamin B3": 0.3, "Vitamin B2": 0.03, "Vitamin B1": 0.03 },
    aminoAcids: { Histidine: 0.022, Isoleucine: 0.034, Leucine: 0.06, Lysine: 0.048, Methionine: 0.013, Phenylalanine: 0.038, Threonine: 0.03, Tryptophan: 0.009, Valine: 0.042 },
    fats: { "Saturated Fat": 0.02, "Monounsaturated Fat": 0.02, "Polyunsaturated Fat": 0.04, "Trans Fat": 0 }
  },
  {
    name: "Cucumber", units: "grams",
    macros: {
      Protein: 0.7,
      Fat: 0.1,
      Carbohydrates: 3.6,
      "Dietary Fiber": 0.5,
      Water: 95,
      Calories: 15
    },
    minerals: {
      Calcium: 16,
      Iron: 0.3,
      Magnesium: 13,
      Phosphorus: 24,
      Potassium: 147,
      Sodium: 2,
      Zinc: 0.2,
      Copper: 0.1,
      Selenium: 0.3,
      Iodine: 0.1
    },
    vitamins: {
      "Vitamin A": 105,
      "Vitamin B12": 0,
      "Vitamin B9": 7,
      "Vitamin C": 2.8,
      "Vitamin D": 0,
      "Vitamin E": 0.03,
      "Vitamin B6": 0.04,
      "Vitamin B3": 0.1,
      "Vitamin B2": 0.02,
      "Vitamin B1": 0.03
    },
    aminoAcids: {
      Histidine: 0.015,
      Isoleucine: 0.025,
      Leucine: 0.045,
      Lysine: 0.035,
      Methionine: 0.01,
      Phenylalanine: 0.03,
      Threonine: 0.02,
      Tryptophan: 0.006,
      Valine: 0.03
    },
    fats: {
      "Saturated Fat": 0.03,
      "Monounsaturated Fat": 0.01,
      "Polyunsaturated Fat": 0.02,
      "Trans Fat": 0
    }
  }
]

export const nonVegFoods: Food[] = [
  {
    name: 'Chicken (Skinless)', units: 'grams',
    macros: { Protein: 24, Fat: 13, Carbohydrates: 0.1, 'Dietary Fiber': 0, Water: 65.8, Calories: 165 },
    minerals: { Calcium: 13, Iron: 1.6, Magnesium: 27, Phosphorus: 190, Potassium: 204, Sodium: 71, Zinc: 1, Copper: 0.04, Selenium: 20, Iodine: 0.3 },
    vitamins: { 'Vitamin A': 100, 'Vitamin B12': 0.47, 'Vitamin B9': 6, 'Vitamin C': 0, 'Vitamin D': 0.1, 'Vitamin E': 0.3, 'Vitamin B6': 0.5, 'Vitamin B3': 13.7, 'Vitamin B2': 0.2, 'Vitamin B1': 0.07 },
    aminoAcids: { Histidine: 0.9, Isoleucine: 1.3, Leucine: 2.3, Lysine: 2.6, Methionine: 0.8, Phenylalanine: 1.1, Threonine: 1.1, Tryptophan: 0.3, Valine: 1.4 },
    fats: { 'Saturated Fat': 3.8, 'Monounsaturated Fat': 5.7, 'Polyunsaturated Fat': 2.9, 'Trans Fat': 0.1 }
  },
  {
    name: 'Mutton', units: 'grams',
    macros: { Protein: 25, Fat: 21, Carbohydrates: 0, 'Dietary Fiber': 0, Water: 52, Calories: 294 },
    minerals: { Calcium: 17, Iron: 1.9, Magnesium: 20, Phosphorus: 190, Potassium: 310, Sodium: 72, Zinc: 4, Copper: 0.09, Selenium: 24, Iodine: 0.2 },
    vitamins: { 'Vitamin A': 0, 'Vitamin B12': 2.5, 'Vitamin B9': 9, 'Vitamin C': 0, 'Vitamin D': 0.1, 'Vitamin E': 0.15, 'Vitamin B6': 0.3, 'Vitamin B3': 5.8, 'Vitamin B2': 0.2, 'Vitamin B1': 0.05 },
    aminoAcids: { Histidine: 0.9, Isoleucine: 1.4, Leucine: 2.4, Lysine: 2.3, Methionine: 0.9, Phenylalanine: 1.2, Threonine: 1.2, Tryptophan: 0.3, Valine: 1.5 },
    fats: { 'Saturated Fat': 9.3, 'Monounsaturated Fat': 8.7, 'Polyunsaturated Fat': 1.4, 'Trans Fat': 0.2 }
  },
  {
    name: 'Beef', units: 'grams',
    macros: { Protein: 26.1, Fat: 20, Carbohydrates: 0, 'Dietary Fiber': 0, Water: 52, Calories: 288 },
    minerals: { Calcium: 12, Iron: 2.6, Magnesium: 20, Phosphorus: 190, Potassium: 318, Sodium: 55, Zinc: 4, Copper: 0.09, Selenium: 24, Iodine: 0.2 },
    vitamins: { 'Vitamin A': 0, 'Vitamin B12': 2.5, 'Vitamin B9': 9, 'Vitamin C': 0, 'Vitamin D': 0.2, 'Vitamin E': 0.15, 'Vitamin B6': 0.3, 'Vitamin B3': 5.8, 'Vitamin B2': 0.2, 'Vitamin B1': 0.05 }, aminoAcids: { Histidine: 1, Isoleucine: 1.5, Leucine: 2.6, Lysine: 2.7, Methionine: 0.9, Phenylalanine: 1.3, Threonine: 1.3, Tryptophan: 0.3, Valine: 1.6 },
    fats: { 'Saturated Fat': 8.1, 'Monounsaturated Fat': 8.8, 'Polyunsaturated Fat': 0.7, 'Trans Fat': 0.4 }
  },
  {
    name: 'Fish ( Mixed Species)', units: 'grams',
    macros: { Protein: 22, Fat: 5, Carbohydrates: 0, 'Dietary Fiber': 0, Water: 70, Calories: 145 },
    minerals: { Calcium: 20, Iron: 0.9, Magnesium: 30, Phosphorus: 210, Potassium: 300, Sodium: 60, Zinc: 0.8, Copper: 0.1, Selenium: 36, Iodine: 0.4 },
    vitamins: { 'Vitamin A': 50, 'Vitamin B12': 2.5, 'Vitamin B9': 15, 'Vitamin C': 0, 'Vitamin D': 0.2, 'Vitamin E': 0.4, 'Vitamin B6': 0.3, 'Vitamin B3': 2.9, 'Vitamin B2': 0.1, 'Vitamin B1': 0.05 },
    aminoAcids: { Histidine: 0.8, Isoleucine: 1.2, Leucine: 2.1, Lysine: 2.4, Methionine: 0.7, Phenylalanine: 1, Threonine: 1, Tryptophan: 0.3, Valine: 1.3 },
    fats: { 'Saturated Fat': 1.1, 'Monounsaturated Fat': 1.8, 'Polyunsaturated Fat': 1.7, 'Trans Fat': 0.1 }
  },
  {
    name: 'Shrimp', units: 'grams',
    macros: { Protein: 23, Fat: 2, Carbohydrates: 2, 'Dietary Fiber': 0, Water: 70, Calories: 99 },
    minerals: { Calcium: 91, Iron: 0.3, Magnesium: 22, Phosphorus: 244, Potassium: 170, Sodium: 947, Zinc: 1.3, Copper: 0.2, Selenium: 30, Iodine: 0.5 },
    vitamins: { 'Vitamin A': 54, 'Vitamin B12': 1.2, 'Vitamin B9': 19, 'Vitamin C': 0, 'Vitamin D': 0.1, 'Vitamin E': 0.2, 'Vitamin B6': 0.2, 'Vitamin B3': 2, 'Vitamin B2': 0.1, 'Vitamin B1': 0.06 },
    aminoAcids: { Histidine: 0.7, Isoleucine: 1.1, Leucine: 2, Lysine: 2.2, Methionine: 0.6, Phenylalanine: 1, Threonine: 1, Tryptophan: 0.2, Valine: 1.2 },
    fats: { 'Saturated Fat': 0.3, 'Monounsaturated Fat': 0.3, 'Polyunsaturated Fat': 0.7, 'Trans Fat': 0 }
  },
  {
    name: 'Egg (Boiled, Whole)', units: 'grams',
    macros: { Protein: 13, Fat: 11, Carbohydrates: 1.1, 'Dietary Fiber': 0, Water: 74, Calories: 155 },
    minerals: { Calcium: 50, Iron: 1.2, Magnesium: 10, Phosphorus: 100, Potassium: 126, Sodium: 124, Zinc: 1, Copper: 0.1, Selenium: 30, Iodine: 0.7 },
    vitamins: { 'Vitamin A': 160, 'Vitamin B12': 1.1, 'Vitamin B9': 47, 'Vitamin C': 0, 'Vitamin D': 2, 'Vitamin E': 1, 'Vitamin B6': 0.1, 'Vitamin B3': 0.1, 'Vitamin B2': 0.5, 'Vitamin B1': 0.04 },
    aminoAcids: { Histidine: 0.4, Isoleucine: 0.9, Leucine: 1.1, Lysine: 0.9, Methionine: 0.4, Phenylalanine: 0.7, Threonine: 0.6, Tryptophan: 0.2, Valine: 0.9 },
    fats: { 'Saturated Fat': 3.3, 'Monounsaturated Fat': 4.1, 'Polyunsaturated Fat': 1.4, 'Trans Fat': 0.1 }
  },
  {
    name: 'Crab', units: 'grams',
    macros: { Protein: 19.4, Fat: 1.5, Carbohydrates: 0, 'Dietary Fiber': 0, Water: 78, Calories: 97 },
    minerals: { Calcium: 91, Iron: 0.5, Magnesium: 36, Phosphorus: 283, Potassium: 259, Sodium: 378, Zinc: 3.1, Copper: 0.5, Selenium: 36.4, Iodine: 0.4 },
    vitamins: { 'Vitamin A': 2, 'Vitamin B12': 11.5, 'Vitamin B9': 51, 'Vitamin C': 7.6, 'Vitamin D': 0.1, 'Vitamin E': 2, 'Vitamin B6': 0.2, 'Vitamin B3': 2, 'Vitamin B2': 0.1, 'Vitamin B1': 0.05 },
    aminoAcids: { Histidine: 0.7, Isoleucine: 1, Leucine: 1.8, Lysine: 2, Methionine: 0.6, Phenylalanine: 0.9, Threonine: 0.9, Tryptophan: 0.2, Valine: 1.1 },
    fats: { 'Saturated Fat': 0.2, 'Monounsaturated Fat': 0.3, 'Polyunsaturated Fat': 0.4, 'Trans Fat': 0 }
  }
];

export const macrosFoodSources = [
  {
    name: 'Protein',
    sources: ['Soya', 'Chicken', 'Mutton', 'Beef', 'Shrimp', 'Watermelon seeds', 'Hemp seeds', 'Peanuts', 'Fish', 'Eggs', 'Panneer', 'Lentils', 'Almonds', 'Pumpkin seeds', 'Chia seeds', 'lentils', 'chickpeas']
  },
  {
    name: 'Carbohydrates',
    sources: ['Rice', 'Jowar', 'Barley', 'Sweet Potato', 'Banana', 'millets', 'oats']
  },
  { name: 'Fat', sources: ['Soaked almonds', 'Walnuts', 'flaxseeds', 'olive oil', 'Ghee', 'Butter', 'Cashews', 'Chia Seeds'] },
  { name: 'Fiber', sources: ['Whole Grains', 'Legumes', 'Vegetables', 'Fruits', 'Chia Seeds'] }];

export const vitaminsFoodSources = [
  { name: 'Vitamin A', sources: ['Carrot', 'Moringa Leaves', 'Spinach', 'Sweet Potatoes', 'Mango', 'Eggs'] },
  { name: 'Vitamin B6', sources: ['Chickpeas', 'Banana', 'Fish', 'Potatoes', 'Jowar'] },
  { name: 'Vitamin B12', sources: ['Eggs', 'Fish', 'Shrimp', 'Curd', 'Mutton', 'Dairy'] },
  { name: 'Vitamin C', sources: ['Guava', 'Orange', 'Amla', 'Lemon', 'Strawberry', 'Moringa Leaves', 'Bell Peppers'] },
  { name: 'Vitamin D', sources: ['Eggs', 'Fish', 'Shrimp', 'Fortified Dairy', 'Mushrooms'] },
  { name: 'Vitamin E', sources: ['Almonds', 'Sunflower Seeds', 'Spinach', 'Avocado'] },
  { name: 'Vitamin K', sources: ['Leafy Greens', 'Broccoli', 'Cabbage', 'Moringa'] }];

export const mineralsFoodSources = [
  {
    name: 'Calcium',
    sources: ['Poppy Seeds', 'Sesame Seeds', 'Ragi (finger millet)', 'Chia Seeds', 'Cheese',
      'Sardines (with bones)', 'Tofu', 'Almonds', 'Moringa Leaves', 'Curd', 'Milk',
      'Fortified Plant Milk', 'Leafy Greens (Spinach)', 'Bok Choy', 'Amaranth Leaves', 'Figs (dried)',
      'Soybeans', 'Navy Beans', 'Turnip Greens']
  },
  {
    name: 'Iron', sources: ['Clams', 'Dark Chocolate', 'Pumpkin Seeds', 'Oysters', 'Green Gram',
      'Liver (chicken, beef)', 'Lentils', 'Chickpeas', 'Quinoa',
      'Spinach', 'Jaggery', 'Tofu', 'Mutton', 'Beef', 'Shellfish', 'Amaranth',
      'Soybeans', 'Cashews', 'Sesame Seeds', 'Sun-dried Tomatoes', 'Dried Apricots']
  },
  {
    name: 'Magnesium', sources: ['Pumpkin Seeds', 'Hemp Seeds', 'Basil', 'Flaxseeds', 'Cumin Seeds',
      'Brazil Nuts', 'Sesame Seeds', 'Coriander Seeds', 'Chia Seeds', 'Sunflower Seeds', 'Almonds',
      'Cashews', 'Amaranth', 'Dark Chocolate', 'Peanuts', 'Black Beans', 'Pistachios']
  },
  {
    name: 'Phosphorus', sources: ['Pumpkin Seeds', 'Wheat Germ', 'Sunflower Seeds', 'Sesame Seeds',
      'Cheese (Parmesan, Romano)', 'Amaranth', 'Chia Seeds', 'Shellfish (Scallops, Crab)',
      'Nuts (Almonds, Cashews)', 'Beef Liver', 'Fish (Salmon, Tuna)', 'Pork', 'Chicken',
      'Soy Products (Tofu, Tempeh)',
      'Whole Grains (Oats, Quinoa, Brown Rice)', 'Beans (Kidney, Navy, Black)', 'Lentils',
      'Cottage Cheese', 'Dairy (Milk, Yogurt)', 'Eggs']
  },
  {
    name: 'Potassium', sources: ['Raisins', 'Swiss Chard(bachala kura)', 'Clams', 'Beet Greens',
      'White Beans', 'Lentils', 'Dates', 'Kiwi', 'Oranges', 'Sweet Potatoes', 'Spinach', 'Potatoes',
      'Avocados', 'Tomatoes', 'Bananas', 'Coconut Water', 'Watermelon', 'Mushrooms']
  },
  {
    name: 'Zinc', sources: ['Oysters', 'Hemp seeds', 'Seasame seeds', 'Pumpkin Seeds', 'Coriander Seeds',
      'Sunflower seeds', 'Chia seeds', 'Cashews', 'Red Meat', 'Crab', 'Chicken', 'Peanuts', 'Almonds',
      'Cheese', 'Whole Grains', 'Chick Peas', 'Eggs']
  },
  {
    name: 'Selenium', sources: ['Brazil Nuts', 'Chia seeds', 'Beef Liver', 'Red meat', 'Crab', 'Shrimp',
      'Fish', 'Oats', 'Barley', 'Chicken', 'Flax seeds', 'Eggs', 'Sunflower Seeds', 'Mushrooms',
      'Cottage Cheese', 'Whole Grains']
  },
  {
    name: 'Copper', sources: ['Beef Liver', 'Oysters', 'Spirulina', 'Sesame Seeds', 'Shiitake Mushrooms',
      'Cashews', 'Sunflower Seeds', 'Hazelnuts', 'Brazil Nuts', 'Dark Chocolate', 'Almonds', 'Chickpeas']
  }];

