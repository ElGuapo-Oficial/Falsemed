export async function getFitnessData() {
    const res = await fetch('https://www.truemed.com/_next/data/_Lghb3s1r-4rD8RYWfUwV/shop/fitness.json?category=fitness')
   
    if (!res.ok) {
      throw new Error('Failed to fetch Fitness data');
    }
   
    return res.json();
}

export async function getSuplementsData() {
    const res = await fetch('https://www.truemed.com/_next/data/_Lghb3s1r-4rD8RYWfUwV/shop/supplements.json?category=supplements')
   
    if (!res.ok) {
      throw new Error('Failed to fetch Supplements data');
    }
   
    return res.json();
}

export async function getFoodData() {
    const res = await fetch('https://www.truemed.com/_next/data/_Lghb3s1r-4rD8RYWfUwV/shop/food.json?category=food')
   
    if (!res.ok) {
      throw new Error('Failed to fetch Food data');
    }
   
    return res.json();
}

export async function getSaunaData() {
    const res = await fetch('https://www.truemed.com/_next/data/_Lghb3s1r-4rD8RYWfUwV/shop/saunasandcoldplunges.json?category=saunasandcoldplunges')
   
    if (!res.ok) {
      throw new Error('Failed to fetch Sauna data');
    }
   
    return res.json();
}