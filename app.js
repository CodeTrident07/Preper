/**
 * PREPER — By Praanav
 * Main Application JavaScript
 * ============================================================
 */

'use strict';

/* ─────────────────────────────────────────────────────────────
   RECIPE DATABASE
   All meals are high-protein, batch-cook friendly, and designed
   to be restaurant-quality when reheated.
───────────────────────────────────────────────────────────── */
const RECIPES = {

  breakfast: [
    {
      id: 'b1',
      name: 'Korean Egg & Rice Bowls',
      emoji: '🍳',
      type: 'breakfast',
      tags: ['High Protein', 'Batch Friendly', 'Savory'],
      prepTime: 10,
      cookTime: 20,
      servings: 4,
      calories: 480,
      protein: 38,
      carbs: 52,
      fat: 12,
      color: '#4d9fff',
      description: 'Jammy soy-marinated eggs over fluffy jasmine rice with sesame oil, chilli flakes, and crispy garlic. Tastes like a Seoul street food stall.',
      ingredients: [
        { name: 'Jasmine rice', amount: 400, unit: 'g' },
        { name: 'Eggs', amount: 8, unit: 'pcs' },
        { name: 'Soy sauce', amount: 60, unit: 'ml' },
        { name: 'Rice vinegar', amount: 30, unit: 'ml' },
        { name: 'Sesame oil', amount: 20, unit: 'ml' },
        { name: 'Garlic cloves', amount: 6, unit: 'pcs' },
        { name: 'Green onions', amount: 4, unit: 'stalks' },
        { name: 'Chilli flakes', amount: 1, unit: 'tsp' },
        { name: 'Sesame seeds', amount: 2, unit: 'tbsp' },
        { name: 'Chicken breast', amount: 600, unit: 'g' },
      ],
      steps: [
        { title: 'Cook rice', desc: 'Rinse jasmine rice and cook in a rice cooker or pot with a 1:1.5 water ratio. Season with a pinch of salt.' },
        { title: 'Marinate eggs', desc: 'Boil eggs for exactly 7 minutes for jammy yolks. Peel and place in a zip-lock bag with soy sauce, rice vinegar, and 100ml water. Marinate 2–4 hours.' },
        { title: 'Cook chicken', desc: 'Season chicken with salt, pepper, garlic powder. Pan-sear on high heat 5 min each side until cooked through. Rest and slice thinly.' },
        { title: 'Make crispy garlic', desc: 'Thinly slice garlic. Fry in sesame oil on medium heat until golden. Remove with a slotted spoon onto paper towel.' },
        { title: 'Assemble containers', desc: 'Layer rice, sliced chicken, halved marinated egg. Drizzle with soy-sesame sauce. Top with crispy garlic, green onions, chilli flakes, sesame seeds.' },
        { title: 'Store', desc: 'Keep eggs in separate container. Refrigerate up to 4 days. Reheat rice and chicken, add egg cold.' },
      ],
      storage: 'Refrigerate in airtight containers up to 4 days. Keep eggs separate.',
      reheat: 'Microwave rice + chicken 2 min. Add cold marinated egg. Drizzle fresh sesame oil.',
    },
    {
      id: 'b2',
      name: 'Protein Overnight Oats',
      emoji: '🥣',
      type: 'breakfast',
      tags: ['High Protein', 'No Cook', 'Sweet'],
      prepTime: 8,
      cookTime: 0,
      servings: 4,
      calories: 420,
      protein: 42,
      carbs: 48,
      fat: 9,
      color: '#ff8c42',
      description: 'Thick, creamy overnight oats loaded with protein. Banana bread flavour meets a serious macro punch. Zero cooking required.',
      ingredients: [
        { name: 'Rolled oats', amount: 320, unit: 'g' },
        { name: 'Greek yogurt (0%)', amount: 480, unit: 'g' },
        { name: 'Whey protein powder', amount: 120, unit: 'g' },
        { name: 'Almond milk', amount: 400, unit: 'ml' },
        { name: 'Chia seeds', amount: 40, unit: 'g' },
        { name: 'Bananas', amount: 2, unit: 'pcs' },
        { name: 'Honey', amount: 40, unit: 'ml' },
        { name: 'Vanilla extract', amount: 2, unit: 'tsp' },
        { name: 'Cinnamon', amount: 1, unit: 'tsp' },
        { name: 'Mixed berries (frozen)', amount: 200, unit: 'g' },
      ],
      steps: [
        { title: 'Mix dry base', desc: 'In a large bowl, combine oats, chia seeds, and cinnamon. Stir well.' },
        { title: 'Make protein mixture', desc: 'Whisk together Greek yogurt, protein powder, almond milk, honey, and vanilla until smooth and lump-free.' },
        { title: 'Combine', desc: 'Pour wet mixture over dry ingredients and fold together. The mixture will thicken overnight.' },
        { title: 'Portion into jars', desc: 'Divide evenly into 4 mason jars (500ml). Add a layer of berries on top of each.' },
        { title: 'Refrigerate overnight', desc: 'Seal jars and refrigerate minimum 6 hours (overnight is ideal). The oats will absorb liquid and thicken beautifully.' },
        { title: 'Morning prep', desc: 'Add fresh banana slices and a drizzle of honey before eating. Can eat cold or warm slightly in microwave 60 seconds.' },
      ],
      storage: 'Sealed jars in fridge up to 5 days. Add banana fresh each morning.',
      reheat: 'Eat cold or microwave 60–90 seconds. Stir before eating.',
    },
    {
      id: 'b3',
      name: 'Egg & Avocado Breakfast Wraps',
      emoji: '🌯',
      type: 'breakfast',
      tags: ['High Protein', 'Portable', 'Savory'],
      prepTime: 12,
      cookTime: 15,
      servings: 4,
      calories: 520,
      protein: 36,
      carbs: 40,
      fat: 22,
      color: '#3de0c8',
      description: 'Fluffy scrambled eggs, creamy avocado, and spicy sriracha in a warm tortilla. Meal-prepable components keep everything fresh.',
      ingredients: [
        { name: 'Large eggs', amount: 12, unit: 'pcs' },
        { name: 'Large tortillas', amount: 4, unit: 'pcs' },
        { name: 'Avocados (ripe)', amount: 2, unit: 'pcs' },
        { name: 'Feta cheese', amount: 120, unit: 'g' },
        { name: 'Cherry tomatoes', amount: 200, unit: 'g' },
        { name: 'Sriracha', amount: 30, unit: 'ml' },
        { name: 'Lime', amount: 1, unit: 'pcs' },
        { name: 'Butter', amount: 30, unit: 'g' },
        { name: 'Salt & pepper', amount: 1, unit: 'tsp' },
        { name: 'Baby spinach', amount: 80, unit: 'g' },
      ],
      steps: [
        { title: 'Scramble eggs in batches', desc: 'Whisk eggs with salt and pepper. Cook in butter on low-medium heat, stirring constantly for creamy, soft curds. Remove just before fully set.' },
        { title: 'Prep avocado mash', desc: 'Mash avocados with lime juice, salt, and pepper. The lime prevents browning for 2–3 days. Store separately in covered bowl with cling film pressed directly on surface.' },
        { title: 'Halve cherry tomatoes', desc: 'Slice tomatoes. Store in a small container separately.' },
        { title: 'Warm tortillas', desc: 'On the day of eating, warm tortillas in a dry pan 30 seconds per side or in microwave 15 seconds.' },
        { title: 'Assemble wrap', desc: 'Spread avocado mash, add spinach, warm eggs, tomatoes, crumbled feta, and a drizzle of sriracha. Wrap tightly.' },
      ],
      storage: 'Store components separately. Eggs 3 days, avocado 2 days (press cling film on surface), tortillas at room temp.',
      reheat: 'Reheat eggs in microwave 45 seconds. Assemble wrap fresh each morning.',
    },
    {
      id: 'b4',
      name: 'Protein Pancake Stack',
      emoji: '🥞',
      type: 'breakfast',
      tags: ['High Protein', 'Batch Friendly', 'Sweet'],
      prepTime: 10,
      cookTime: 25,
      servings: 4,
      calories: 460,
      protein: 44,
      carbs: 42,
      fat: 11,
      color: '#e8ff47',
      description: 'Fluffy, golden protein pancakes that actually taste like real pancakes. Batch cook all at once, freeze in stacks, and reheat in 60 seconds.',
      ingredients: [
        { name: 'Rolled oats (blended)', amount: 200, unit: 'g' },
        { name: 'Whey protein powder', amount: 160, unit: 'g' },
        { name: 'Eggs', amount: 6, unit: 'pcs' },
        { name: 'Cottage cheese', amount: 240, unit: 'g' },
        { name: 'Almond milk', amount: 160, unit: 'ml' },
        { name: 'Baking powder', amount: 2, unit: 'tsp' },
        { name: 'Vanilla extract', amount: 2, unit: 'tsp' },
        { name: 'Cinnamon', amount: 1, unit: 'tsp' },
        { name: 'Coconut oil spray', amount: 1, unit: 'pcs' },
        { name: 'Greek yogurt (topping)', amount: 200, unit: 'g' },
      ],
      steps: [
        { title: 'Blend oats', desc: 'Add rolled oats to blender and pulse until fine flour forms.' },
        { title: 'Make batter', desc: 'Add eggs, cottage cheese, almond milk, protein powder, baking powder, vanilla, and cinnamon to blender. Blend 30 seconds until smooth. Rest batter 5 minutes.' },
        { title: 'Cook pancakes', desc: 'Heat non-stick pan on medium. Spray with coconut oil. Pour 60ml batter per pancake. Cook 2–3 min until bubbles form on top, flip, cook 1 min more.' },
        { title: 'Batch all pancakes', desc: 'Cook all batter in sequence. Lay finished pancakes on wire rack to cool. Do not stack until cool to prevent sogginess.' },
        { title: 'Portion and store', desc: 'Stack 3 pancakes per serving with parchment paper between layers. Wrap each stack and freeze or refrigerate.' },
      ],
      storage: 'Fridge 4 days or freeze up to 2 months (with parchment between).',
      reheat: 'Microwave from fridge 60 seconds. From frozen: 2 minutes. Or toast in toaster 2 cycles.',
    },
  ],

  lunch: [
    {
      id: 'l1',
      name: 'Korean Beef Rice Bowls',
      emoji: '🥩',
      type: 'lunch',
      tags: ['High Protein', 'Umami', 'Batch King'],
      prepTime: 15,
      cookTime: 25,
      servings: 4,
      calories: 620,
      protein: 52,
      carbs: 60,
      fat: 18,
      color: '#ff4d4d',
      description: 'Sweet-savory gochujang ground beef over jasmine rice with cucumber, pickled carrots, and sesame drizzle. One of the best meal prep lunches you will ever eat.',
      ingredients: [
        { name: 'Lean ground beef (90%)', amount: 800, unit: 'g' },
        { name: 'Jasmine rice', amount: 400, unit: 'g' },
        { name: 'Soy sauce', amount: 80, unit: 'ml' },
        { name: 'Gochujang paste', amount: 40, unit: 'g' },
        { name: 'Brown sugar', amount: 30, unit: 'g' },
        { name: 'Sesame oil', amount: 20, unit: 'ml' },
        { name: 'Garlic cloves', amount: 6, unit: 'pcs' },
        { name: 'Fresh ginger', amount: 20, unit: 'g' },
        { name: 'Cucumbers', amount: 2, unit: 'pcs' },
        { name: 'Carrots (for pickling)', amount: 2, unit: 'pcs' },
        { name: 'Rice vinegar', amount: 40, unit: 'ml' },
        { name: 'Green onions', amount: 4, unit: 'stalks' },
        { name: 'Sesame seeds', amount: 2, unit: 'tbsp' },
      ],
      steps: [
        { title: 'Cook rice', desc: 'Rinse jasmine rice, cook with 1:1.5 water ratio. Season lightly with salt.' },
        { title: 'Quick pickle carrots', desc: 'Julienne carrots. Mix rice vinegar, 1 tsp sugar, and pinch of salt. Toss with carrots and let sit while cooking the beef.' },
        { title: 'Make sauce', desc: 'Whisk together soy sauce, gochujang, brown sugar, sesame oil, minced garlic, and grated ginger until smooth.' },
        { title: 'Brown the beef', desc: 'In a large wok or skillet, cook ground beef on high heat, breaking up into small crumbles. Drain excess fat. Add sauce and stir fry 3–4 minutes until caramelised.' },
        { title: 'Slice cucumber', desc: 'Slice cucumbers into thin rounds or half-moons. Season lightly.' },
        { title: 'Assemble bowls', desc: 'Layer rice, beef, pickled carrots, cucumber. Top with green onions, sesame seeds, and optional extra gochujang drizzle.' },
      ],
      storage: 'Refrigerate 5 days. Keep pickled carrots separate (they stay crunchy longer).',
      reheat: 'Microwave 2 minutes. Add a splash of water over rice before reheating to prevent dryness.',
    },
    {
      id: 'l2',
      name: 'Chicken Burrito Bowls',
      emoji: '🌮',
      type: 'lunch',
      tags: ['High Protein', 'Mexican', 'Classic'],
      prepTime: 15,
      cookTime: 30,
      servings: 4,
      calories: 580,
      protein: 56,
      carbs: 54,
      fat: 14,
      color: '#ff8c42',
      description: 'Chipotle-style but better. Smoky grilled chicken, cilantro lime rice, black beans, and fresh pico. This is not diet food — it just happens to have elite macros.',
      ingredients: [
        { name: 'Chicken thighs (boneless)', amount: 900, unit: 'g' },
        { name: 'Long grain white rice', amount: 360, unit: 'g' },
        { name: 'Black beans (canned)', amount: 2, unit: 'cans' },
        { name: 'Corn kernels', amount: 200, unit: 'g' },
        { name: 'Roma tomatoes', amount: 4, unit: 'pcs' },
        { name: 'White onion', amount: 1, unit: 'pcs' },
        { name: 'Jalapeño', amount: 2, unit: 'pcs' },
        { name: 'Fresh cilantro', amount: 1, unit: 'bunch' },
        { name: 'Limes', amount: 3, unit: 'pcs' },
        { name: 'Chipotle powder', amount: 2, unit: 'tsp' },
        { name: 'Cumin', amount: 1, unit: 'tsp' },
        { name: 'Garlic powder', amount: 1, unit: 'tsp' },
        { name: 'Olive oil', amount: 30, unit: 'ml' },
      ],
      steps: [
        { title: 'Season chicken', desc: 'Coat chicken thighs in olive oil, chipotle, cumin, garlic powder, salt, pepper, and juice of 1 lime. Marinate 30 min if possible.' },
        { title: 'Cook cilantro lime rice', desc: 'Cook rice as normal. While hot, fold in juice of 1 lime, chopped cilantro, and a pinch of salt. Fluff with fork.' },
        { title: 'Grill or pan-sear chicken', desc: 'On high heat, cook chicken 6–7 min per side until charred and cooked through (75°C internal). Rest 5 min, then slice.' },
        { title: 'Season black beans', desc: 'Heat beans with a splash of water, cumin, garlic powder, salt, and pinch of chipotle. Cook until fragrant.' },
        { title: 'Make pico de gallo', desc: 'Finely dice tomatoes, onion, and jalapeño. Mix with cilantro, lime juice, and salt. Store separately for freshness.' },
        { title: 'Assemble', desc: 'Layer rice, beans, corn, sliced chicken, and pico. Squeeze extra lime. Store pico separately if prepping ahead.' },
      ],
      storage: 'Containers: 5 days. Keep pico de gallo in a separate small container.',
      reheat: 'Microwave 2–2.5 minutes. Add fresh pico cold on top after reheating.',
    },
    {
      id: 'l3',
      name: 'Mediterranean Chicken Wraps',
      emoji: '🫓',
      type: 'lunch',
      tags: ['High Protein', 'Mediterranean', 'Fresh'],
      prepTime: 20,
      cookTime: 20,
      servings: 4,
      calories: 540,
      protein: 48,
      carbs: 44,
      fat: 18,
      color: '#3de0c8',
      description: 'Herbed chicken shawarma-spiced, wrapped with tzatziki, roasted red peppers, feta, and crisp lettuce in a warm flatbread. Mediterranean diet meets athlete macros.',
      ingredients: [
        { name: 'Chicken breast', amount: 800, unit: 'g' },
        { name: 'Large flatbreads', amount: 4, unit: 'pcs' },
        { name: 'Greek yogurt', amount: 200, unit: 'g' },
        { name: 'Cucumber', amount: 1, unit: 'pcs' },
        { name: 'Feta cheese', amount: 120, unit: 'g' },
        { name: 'Roasted red peppers (jar)', amount: 1, unit: 'jar' },
        { name: 'Romaine lettuce', amount: 1, unit: 'head' },
        { name: 'Lemon', amount: 2, unit: 'pcs' },
        { name: 'Garlic cloves', amount: 4, unit: 'pcs' },
        { name: 'Cumin', amount: 1, unit: 'tsp' },
        { name: 'Paprika', amount: 2, unit: 'tsp' },
        { name: 'Turmeric', amount: 0.5, unit: 'tsp' },
        { name: 'Oregano', amount: 1, unit: 'tsp' },
        { name: 'Olive oil', amount: 30, unit: 'ml' },
      ],
      steps: [
        { title: 'Marinate chicken', desc: 'Mix cumin, paprika, turmeric, oregano, garlic, lemon juice, and olive oil. Coat chicken and marinate minimum 30 minutes.' },
        { title: 'Make tzatziki', desc: 'Grate cucumber, squeeze out all liquid. Mix with Greek yogurt, garlic, lemon juice, salt, and dill. Refrigerate.' },
        { title: 'Cook chicken', desc: 'Grill or pan-fry chicken on high heat until cooked through with charred edges. Rest and slice into strips.' },
        { title: 'Prep components', desc: 'Shred romaine. Drain and slice roasted red peppers. Crumble feta. Store each component separately.' },
        { title: 'Assemble daily', desc: 'Warm flatbread, spread tzatziki, layer chicken, peppers, lettuce, feta. Wrap tightly in foil for travel.' },
      ],
      storage: 'Chicken and tzatziki: 4 days. Assemble wraps fresh each day for best texture.',
      reheat: 'Reheat chicken 90 seconds. Assemble wrap fresh. Wrap in foil and microwave assembled wrap 30 seconds.',
    },
    {
      id: 'l4',
      name: 'High-Protein Pasta Bowls',
      emoji: '🍝',
      type: 'lunch',
      tags: ['High Protein', 'Italian', 'Comfort'],
      prepTime: 10,
      cookTime: 25,
      servings: 4,
      calories: 600,
      protein: 54,
      carbs: 64,
      fat: 14,
      color: '#ff4d4d',
      description: 'Turkey bolognese meets protein pasta. Rich, slow-cooked flavour but batch-prepped in under 35 minutes. Comforting food that supports performance.',
      ingredients: [
        { name: 'High-protein pasta (e.g. Barilla Pro+)', amount: 400, unit: 'g' },
        { name: 'Lean ground turkey', amount: 700, unit: 'g' },
        { name: 'Crushed tomatoes (can)', amount: 2, unit: 'cans' },
        { name: 'Tomato paste', amount: 60, unit: 'g' },
        { name: 'Yellow onion', amount: 1, unit: 'pcs' },
        { name: 'Garlic cloves', amount: 6, unit: 'pcs' },
        { name: 'Fresh basil', amount: 1, unit: 'bunch' },
        { name: 'Parmesan (grated)', amount: 80, unit: 'g' },
        { name: 'Olive oil', amount: 20, unit: 'ml' },
        { name: 'Dried oregano', amount: 2, unit: 'tsp' },
        { name: 'Chilli flakes', amount: 1, unit: 'tsp' },
        { name: 'Salt & pepper', amount: 1, unit: 'tsp' },
      ],
      steps: [
        { title: 'Sauté aromatics', desc: 'In a large pot, heat olive oil. Cook diced onion 4 minutes until soft. Add minced garlic, cook 1 minute.' },
        { title: 'Brown turkey', desc: 'Add ground turkey, cook on high heat breaking up into small pieces until browned, about 6 minutes.' },
        { title: 'Build sauce', desc: 'Add tomato paste and stir 2 minutes. Add crushed tomatoes, oregano, chilli flakes, salt, pepper. Simmer 15 minutes.' },
        { title: 'Cook pasta al dente', desc: 'Cook pasta in heavily salted boiling water 1 minute less than package directions. Reserve 120ml pasta water.' },
        { title: 'Combine', desc: 'Drain pasta and add to sauce with a splash of pasta water. Toss 2 minutes on high heat to coat.' },
        { title: 'Portion and top', desc: 'Divide into containers. Top with fresh basil and parmesan. Cool completely before sealing.' },
      ],
      storage: 'Fridge up to 5 days. Pasta absorbs sauce overnight — actually tastes better day 2!',
      reheat: 'Microwave 2 min with a splash of water. Stir halfway. Add fresh parmesan after reheating.',
    },
  ],

  dinner: [
    {
      id: 'd1',
      name: 'Teriyaki Salmon & Jasmine Rice',
      emoji: '🐟',
      type: 'dinner',
      tags: ['Omega-3', 'Japanese', 'Premium'],
      prepTime: 10,
      cookTime: 25,
      servings: 4,
      calories: 640,
      protein: 54,
      carbs: 56,
      fat: 20,
      color: '#ff8c42',
      description: 'Pan-seared salmon with homemade sticky teriyaki glaze, jasmine rice, and charred broccoli. Omega-3 heavy, flavour-first, and infinitely reheat-able.',
      ingredients: [
        { name: 'Salmon fillets', amount: 800, unit: 'g' },
        { name: 'Jasmine rice', amount: 400, unit: 'g' },
        { name: 'Broccoli', amount: 400, unit: 'g' },
        { name: 'Soy sauce', amount: 80, unit: 'ml' },
        { name: 'Honey', amount: 60, unit: 'ml' },
        { name: 'Mirin', amount: 40, unit: 'ml' },
        { name: 'Garlic cloves', amount: 4, unit: 'pcs' },
        { name: 'Fresh ginger', amount: 15, unit: 'g' },
        { name: 'Cornstarch', amount: 10, unit: 'g' },
        { name: 'Sesame oil', amount: 15, unit: 'ml' },
        { name: 'Sesame seeds', amount: 2, unit: 'tbsp' },
        { name: 'Green onions', amount: 3, unit: 'stalks' },
      ],
      steps: [
        { title: 'Cook rice', desc: 'Rinse jasmine rice and cook with 1:1.5 water ratio. Rest covered for 10 minutes after cooking.' },
        { title: 'Make teriyaki sauce', desc: 'Whisk soy sauce, honey, mirin, minced garlic, grated ginger. Bring to simmer in small pan. Mix cornstarch with 2 tbsp water, add to sauce, stir until thickened.' },
        { title: 'Roast broccoli', desc: 'Toss broccoli florets in oil, salt, and pepper. Roast at 220°C for 20 minutes until charred at edges.' },
        { title: 'Sear salmon', desc: 'Pat salmon dry. Season with salt. Sear skin-side down in hot pan 4 minutes. Flip, cook 2 minutes. Pour teriyaki sauce over fish, glaze for 1 minute.' },
        { title: 'Assemble containers', desc: 'Rice base, broccoli alongside, salmon on top. Drizzle extra sauce over everything. Finish with sesame seeds and green onion.' },
      ],
      storage: 'Fridge 4 days. Salmon gets better day 2 as it absorbs the teriyaki sauce.',
      reheat: 'Microwave 90 seconds. Do not overheat salmon — warm is perfect.',
    },
    {
      id: 'd2',
      name: 'Steak & Roasted Potatoes',
      emoji: '🥩',
      type: 'dinner',
      tags: ['High Protein', 'Classic', 'Bulking'],
      prepTime: 15,
      cookTime: 35,
      servings: 4,
      calories: 720,
      protein: 58,
      carbs: 58,
      fat: 26,
      color: '#ff4d4d',
      description: 'Proper steak dinner, batch-prepped. Chimichurri-marinated flank steak sliced thin, smashed crispy potatoes, and roasted asparagus. Serious food for serious athletes.',
      ingredients: [
        { name: 'Flank steak', amount: 1000, unit: 'g' },
        { name: 'Baby potatoes', amount: 800, unit: 'g' },
        { name: 'Asparagus', amount: 400, unit: 'g' },
        { name: 'Fresh parsley', amount: 1, unit: 'bunch' },
        { name: 'Garlic cloves', amount: 8, unit: 'pcs' },
        { name: 'Red wine vinegar', amount: 30, unit: 'ml' },
        { name: 'Olive oil', amount: 60, unit: 'ml' },
        { name: 'Chilli flakes', amount: 1, unit: 'tsp' },
        { name: 'Dried oregano', amount: 1, unit: 'tsp' },
        { name: 'Smoked paprika', amount: 1, unit: 'tsp' },
        { name: 'Butter', amount: 40, unit: 'g' },
        { name: 'Salt & coarse pepper', amount: 1, unit: 'tbsp' },
      ],
      steps: [
        { title: 'Make chimichurri', desc: 'Blend parsley, garlic, red wine vinegar, olive oil, chilli flakes, oregano, salt, and pepper until combined but slightly chunky. Reserve half for serving.' },
        { title: 'Marinate steak', desc: 'Coat steak in half the chimichurri. Marinate at least 30 minutes (overnight is best for even deeper flavour).' },
        { title: 'Smash potatoes', desc: 'Boil baby potatoes until tender, 15 min. Drain, cool slightly. Place on baking tray, smash flat with a potato masher. Drizzle olive oil, season. Roast 220°C 20 min until ultra-crispy.' },
        { title: 'Roast asparagus', desc: 'Toss asparagus in oil, salt, and smoked paprika. Add to oven for last 12 minutes alongside potatoes.' },
        { title: 'Sear steak', desc: 'Get cast iron screaming hot. Sear marinated steak 4–5 min per side for medium (adjust to preference). Add butter, garlic, and baste last 2 minutes. Rest 10 min. Slice against the grain.' },
        { title: 'Assemble', desc: 'Plate potatoes and asparagus. Layer sliced steak. Spoon reserved chimichurri over steak before sealing containers.' },
      ],
      storage: 'Fridge 4 days. Slice steak cold for thinner, more uniform cuts.',
      reheat: 'Microwave 90 seconds or reheat in pan on medium 2 minutes. Steak is best warm, not hot.',
    },
    {
      id: 'd3',
      name: 'Garlic Chicken Quinoa Bowls',
      emoji: '🍗',
      type: 'dinner',
      tags: ['High Protein', 'Clean', 'Lean Gains'],
      prepTime: 12,
      cookTime: 28,
      servings: 4,
      calories: 560,
      protein: 56,
      carbs: 46,
      fat: 16,
      color: '#e8ff47',
      description: 'Herb-crusted chicken breast over lemony quinoa with roasted cherry tomatoes, cucumber, and tahini drizzle. Lean, clean, and genuinely delicious.',
      ingredients: [
        { name: 'Chicken breast', amount: 900, unit: 'g' },
        { name: 'Quinoa', amount: 320, unit: 'g' },
        { name: 'Cherry tomatoes', amount: 300, unit: 'g' },
        { name: 'Cucumber', amount: 1, unit: 'pcs' },
        { name: 'Tahini', amount: 60, unit: 'g' },
        { name: 'Lemon', amount: 3, unit: 'pcs' },
        { name: 'Garlic cloves', amount: 6, unit: 'pcs' },
        { name: 'Fresh parsley', amount: 1, unit: 'bunch' },
        { name: 'Dried thyme', amount: 1, unit: 'tsp' },
        { name: 'Dried rosemary', amount: 1, unit: 'tsp' },
        { name: 'Olive oil', amount: 40, unit: 'ml' },
        { name: 'Kalamata olives', amount: 80, unit: 'g' },
      ],
      steps: [
        { title: 'Cook quinoa', desc: 'Rinse quinoa well. Cook 1 cup quinoa to 1.75 cups water with a pinch of salt. Simmer covered 15 minutes, rest 5 min, fluff with fork. Season with lemon juice and zest.' },
        { title: 'Herb-crust chicken', desc: 'Mix olive oil, minced garlic, thyme, rosemary, salt, and pepper. Coat chicken thoroughly. Let marinate 15 minutes while oven preheats.' },
        { title: 'Roast tomatoes', desc: 'Toss cherry tomatoes with olive oil, salt, and garlic. Roast at 200°C for 18 minutes until they burst and caramelise.' },
        { title: 'Cook chicken', desc: 'Pan-sear chicken 3 min per side for colour, then finish in oven at 200°C for 12 minutes. Rest 5 minutes, slice at an angle.' },
        { title: 'Make tahini dressing', desc: 'Whisk tahini with lemon juice, water (add slowly until drizzle consistency), garlic, and salt.' },
        { title: 'Build bowls', desc: 'Quinoa base, roasted tomatoes, diced cucumber, olives, sliced chicken. Drizzle tahini dressing. Finish with parsley.' },
      ],
      storage: 'Fridge 5 days. Keep tahini dressing in separate small container — drizzle fresh each time.',
      reheat: 'Microwave 2 minutes. Add cold cucumber and fresh tahini after reheating.',
    },
    {
      id: 'd4',
      name: 'High-Protein Stir Fry',
      emoji: '🥦',
      type: 'dinner',
      tags: ['High Protein', 'Asian', 'Quick'],
      prepTime: 15,
      cookTime: 15,
      servings: 4,
      calories: 580,
      protein: 60,
      carbs: 44,
      fat: 16,
      color: '#3de0c8',
      description: 'Wok-charred chicken and beef mix with broccoli, snap peas, and shiitake mushrooms in a dark, sticky sauce. Better than takeout, made in 30 minutes flat.',
      ingredients: [
        { name: 'Chicken breast (strips)', amount: 500, unit: 'g' },
        { name: 'Lean beef strips', amount: 300, unit: 'g' },
        { name: 'Jasmine rice', amount: 400, unit: 'g' },
        { name: 'Broccoli florets', amount: 300, unit: 'g' },
        { name: 'Snap peas', amount: 200, unit: 'g' },
        { name: 'Shiitake mushrooms', amount: 200, unit: 'g' },
        { name: 'Oyster sauce', amount: 60, unit: 'ml' },
        { name: 'Soy sauce', amount: 40, unit: 'ml' },
        { name: 'Dark soy sauce', amount: 20, unit: 'ml' },
        { name: 'Sesame oil', amount: 15, unit: 'ml' },
        { name: 'Garlic cloves', amount: 5, unit: 'pcs' },
        { name: 'Fresh ginger', amount: 15, unit: 'g' },
        { name: 'Cornstarch', amount: 15, unit: 'g' },
        { name: 'Green onions', amount: 4, unit: 'stalks' },
      ],
      steps: [
        { title: 'Velvet the proteins', desc: 'Toss chicken and beef strips in cornstarch, soy sauce, and a pinch of baking soda. Marinate 15 minutes — this gives silky restaurant texture.' },
        { title: 'Make stir fry sauce', desc: 'Mix oyster sauce, soy sauce, dark soy, and sesame oil. Set aside.' },
        { title: 'Cook rice', desc: 'Start rice first so it is ready when stir fry finishes.' },
        { title: 'High-heat protein cook', desc: 'Get wok smoking hot. Cook beef first, 2 min until browned. Remove. Cook chicken 3 min. Remove. Do not crowd the pan or it steams instead of sears.' },
        { title: 'Stir fry vegetables', desc: 'Add a splash of oil to wok. Stir fry garlic and ginger 30 seconds. Add broccoli, snap peas, mushrooms. Toss 3 minutes on max heat.' },
        { title: 'Combine and glaze', desc: 'Return proteins to wok. Pour sauce over everything. Toss on high heat 2 minutes until sauce clings. Top with green onions.' },
      ],
      storage: 'Fridge 4 days. Stir fry reheat exceptionally well — the sauce gets even better.',
      reheat: 'Pan-reheat on medium-high 3 minutes for best texture. Or microwave 2 minutes.',
    },
  ]
};

/* ─────────────────────────────────────────────────────────────
   UTILITY FUNCTIONS
───────────────────────────────────────────────────────────── */

/**
 * Scale ingredient amount based on servings multiplier
 * @param {number} amount - base amount
 * @param {number} baseServings - recipe base servings
 * @param {number} targetServings - desired servings
 */
function scaleAmount(amount, baseServings, targetServings) {
  const scaled = (amount / baseServings) * targetServings;
  // Return clean numbers
  if (scaled % 1 === 0) return scaled;
  return parseFloat(scaled.toFixed(1));
}

/**
 * Format unit for display (handles plurals for count items)
 */
function formatUnit(unit, amount) {
  if (unit === 'pcs') return amount === 1 ? 'pc' : 'pcs';
  return unit;
}

/**
 * Get all recipes as flat array
 */
function getAllRecipes() {
  return [...RECIPES.breakfast, ...RECIPES.lunch, ...RECIPES.dinner];
}

/**
 * Get saved meals from localStorage
 */
function getSavedMeals() {
  try {
    return JSON.parse(localStorage.getItem('preper_saved_meals') || '[]');
  } catch { return []; }
}

/**
 * Save meal to localStorage
 */
function toggleSaveMeal(recipeId) {
  const saved = getSavedMeals();
  const idx = saved.indexOf(recipeId);
  if (idx === -1) {
    saved.push(recipeId);
    showToast('Meal saved! ⭐');
  } else {
    saved.splice(idx, 1);
    showToast('Meal removed from saved.');
  }
  localStorage.setItem('preper_saved_meals', JSON.stringify(saved));
  return idx === -1; // true = now saved
}

/**
 * Check if meal is saved
 */
function isSaved(recipeId) {
  return getSavedMeals().includes(recipeId);
}

/**
 * Show toast notification
 */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('.toast-message').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

/**
 * Calculate macro targets based on athlete profile
 */
function calculateMacros(weightKg, intensity, goal) {
  let multiplier = 1.55; // moderate active
  if (intensity === 'light') multiplier = 1.375;
  if (intensity === 'heavy') multiplier = 1.725;

  const bmr = 10 * weightKg + 625; // simplified mifflin (neutral gender)
  const tdee = Math.round(bmr * multiplier);

  let calories = tdee;
  if (goal === 'cut') calories = Math.round(tdee * 0.82);
  if (goal === 'bulk') calories = Math.round(tdee * 1.12);

  const protein = Math.round(weightKg * 2.2); // 2.2g/kg
  const fat = Math.round((calories * 0.25) / 9);
  const carbs = Math.round((calories - protein * 4 - fat * 9) / 4);

  return { calories, protein, carbs, fat };
}

/**
 * Render a recipe card HTML
 */
function renderRecipeCard(recipe, servings = recipe.servings, showSave = true) {
  const saved = isSaved(recipe.id);
  const scaleFactor = servings / recipe.servings;

  return `
    <div class="card fade-in" data-recipe-id="${recipe.id}">
      <div class="card-image">
        <div class="card-image-placeholder">${recipe.emoji}</div>
      </div>
      <div class="card-body">
        <div class="flex-between mb-8">
          <div class="flex gap-8" style="flex-wrap:wrap">
            <span class="card-tag time">⏱ ${recipe.prepTime + recipe.cookTime} min</span>
            <span class="card-tag protein">💪 ${Math.round(recipe.protein * scaleFactor)}g protein</span>
          </div>
          ${showSave ? `<button class="save-btn ${saved ? 'saved' : ''}" data-id="${recipe.id}" aria-label="Save meal" title="${saved ? 'Saved' : 'Save meal'}">${saved ? '★' : '☆'}</button>` : ''}
        </div>
        <div class="card-title">${recipe.name}</div>
        <p class="text-secondary mt-8" style="font-size:0.86rem;line-height:1.6">${recipe.description}</p>
        <div class="macro-grid mt-16">
          <div class="macro-item cal">
            <div class="macro-value">${Math.round(recipe.calories * scaleFactor)}</div>
            <div class="macro-label">Calories</div>
          </div>
          <div class="macro-item protein">
            <div class="macro-value">${Math.round(recipe.protein * scaleFactor)}g</div>
            <div class="macro-label">Protein</div>
          </div>
          <div class="macro-item carbs">
            <div class="macro-value">${Math.round(recipe.carbs * scaleFactor)}g</div>
            <div class="macro-label">Carbs</div>
          </div>
          <div class="macro-item fat">
            <div class="macro-value">${Math.round(recipe.fat * scaleFactor)}g</div>
            <div class="macro-label">Fat</div>
          </div>
        </div>
        <button class="btn btn-outline mt-16" style="width:100%;justify-content:center" onclick="openRecipeModal('${recipe.id}', ${servings})">
          View Full Recipe
        </button>
      </div>
    </div>
  `;
}

/**
 * Open recipe modal
 */
function openRecipeModal(recipeId, servings) {
  const recipe = getAllRecipes().find(r => r.id === recipeId);
  if (!recipe) return;

  const scaleFactor = servings / recipe.servings;
  const modal = document.getElementById('recipeModal');
  if (!modal) return;

  modal.querySelector('.modal-emoji').textContent = recipe.emoji;
  modal.querySelector('.modal-title').textContent = recipe.name;
  modal.querySelector('.modal-description').textContent = recipe.description;

  // Tags
  modal.querySelector('.modal-tags').innerHTML = `
    <span class="card-tag time">⏱ Prep: ${recipe.prepTime}min</span>
    <span class="card-tag time">🔥 Cook: ${recipe.cookTime}min</span>
    <span class="card-tag protein">💪 ${Math.round(recipe.protein * scaleFactor)}g protein</span>
    <span class="card-tag cal">🔥 ${Math.round(recipe.calories * scaleFactor)} kcal</span>
  `;

  // Macros
  modal.querySelector('.modal-macros').innerHTML = `
    <div class="macro-grid">
      <div class="macro-item cal"><div class="macro-value">${Math.round(recipe.calories * scaleFactor)}</div><div class="macro-label">Calories</div></div>
      <div class="macro-item protein"><div class="macro-value">${Math.round(recipe.protein * scaleFactor)}g</div><div class="macro-label">Protein</div></div>
      <div class="macro-item carbs"><div class="macro-value">${Math.round(recipe.carbs * scaleFactor)}g</div><div class="macro-label">Carbs</div></div>
      <div class="macro-item fat"><div class="macro-value">${Math.round(recipe.fat * scaleFactor)}g</div><div class="macro-label">Fat</div></div>
    </div>
  `;

  // Ingredients
  modal.querySelector('.modal-ingredients').innerHTML = recipe.ingredients.map(ing => {
    const scaled = scaleAmount(ing.amount, recipe.servings, servings);
    return `
      <div class="ingredient-item">
        <span class="ingredient-amount">${scaled} ${formatUnit(ing.unit, scaled)}</span>
        <span>${ing.name}</span>
      </div>
    `;
  }).join('');

  // Steps
  modal.querySelector('.modal-steps').innerHTML = recipe.steps.map((step, i) => `
    <div class="step-item fade-in" style="animation-delay:${i * 0.05}s">
      <div class="step-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="step-text"><strong>${step.title}.</strong> ${step.desc}</div>
    </div>
  `).join('');

  // Storage & reheat
  modal.querySelector('.modal-storage').innerHTML = `
    <div class="step-item">
      <div class="step-num">📦</div>
      <div class="step-text"><strong>Storage.</strong> ${recipe.storage}</div>
    </div>
    <div class="step-item">
      <div class="step-num">♨️</div>
      <div class="step-text"><strong>Reheat.</strong> ${recipe.reheat}</div>
    </div>
  `;

  // Serving info
  const servingInfo = modal.querySelector('.modal-serving-info');
  if (servingInfo) servingInfo.textContent = `Scaled for ${servings} days / servings`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Close recipe modal
 */
function closeRecipeModal() {
  const modal = document.getElementById('recipeModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ─────────────────────────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────────────────────────── */
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Close on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
    });
  }

  // Active link highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Modal close handlers
  const modal = document.getElementById('recipeModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeRecipeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeRecipeModal();
    });
  }
}

/* ─────────────────────────────────────────────────────────────
   SAVE BUTTON DELEGATION
───────────────────────────────────────────────────────────── */
function initSaveButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.save-btn');
    if (btn) {
      const id = btn.dataset.id;
      const nowSaved = toggleSaveMeal(id);
      btn.classList.toggle('saved', nowSaved);
      btn.textContent = nowSaved ? '★' : '☆';
      btn.title = nowSaved ? 'Saved' : 'Save meal';
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   MACRO CALCULATOR
───────────────────────────────────────────────────────────── */
function initMacroCalc() {
  const form = document.getElementById('macroCalcForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('bodyWeight').value);
    const intensity = document.getElementById('trainingIntensity').value;
    const goal = document.getElementById('fitnessGoal').value;

    if (!weight || weight < 40 || weight > 200) {
      showToast('Please enter a valid body weight (40–200kg)');
      return;
    }

    const macros = calculateMacros(weight, intensity, goal);
    const results = document.getElementById('macroResults');
    if (!results) return;

    results.classList.remove('hidden');
    results.querySelector('#r-calories').textContent = macros.calories;
    results.querySelector('#r-protein').textContent = macros.protein + 'g';
    results.querySelector('#r-carbs').textContent = macros.carbs + 'g';
    results.querySelector('#r-fat').textContent = macros.fat + 'g';

    // Update progress bars
    const total = macros.protein * 4 + macros.carbs * 4 + macros.fat * 9;
    document.getElementById('prog-protein').style.width = Math.round((macros.protein * 4 / total) * 100) + '%';
    document.getElementById('prog-carbs').style.width = Math.round((macros.carbs * 4 / total) * 100) + '%';
    document.getElementById('prog-fat').style.width = Math.round((macros.fat * 9 / total) * 100) + '%';

    results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/* ─────────────────────────────────────────────────────────────
   WEEKLY GENERATOR
───────────────────────────────────────────────────────────── */
function generateWeeklyPlan(days) {
  const breakfast = RECIPES.breakfast[Math.floor(Math.random() * RECIPES.breakfast.length)];
  const lunch = RECIPES.lunch[Math.floor(Math.random() * RECIPES.lunch.length)];
  const dinner = RECIPES.dinner[Math.floor(Math.random() * RECIPES.dinner.length)];

  return { breakfast, lunch, dinner, days };
}

function renderWeeklyPlan(plan) {
  const { breakfast, lunch, dinner, days } = plan;
  const meals = [
    { type: 'breakfast', label: '🌅 Breakfast', recipe: breakfast },
    { type: 'lunch', label: '☀️ Lunch', recipe: lunch },
    { type: 'dinner', label: '🌙 Dinner', recipe: dinner },
  ];

  const totalProtein = Math.round((breakfast.protein + lunch.protein + dinner.protein) * (days / breakfast.servings));
  const totalCals = Math.round((breakfast.calories + lunch.calories + dinner.calories) * (days / breakfast.servings));
  const totalPrepTime = breakfast.prepTime + lunch.prepTime + dinner.prepTime;
  const totalCookTime = breakfast.cookTime + lunch.cookTime + dinner.cookTime;

  const mealSlotsHTML = meals.map(m => `
    <div class="meal-slot fade-in">
      <div class="meal-slot-header">
        <div class="meal-slot-type">
          <span style="font-size:1.3rem">${m.recipe.emoji}</span>
          <span class="meal-type-badge ${m.type}">${m.label}</span>
        </div>
        <div class="flex gap-8">
          <span class="card-tag time">⏱ ${m.recipe.prepTime + m.recipe.cookTime} min</span>
          <span class="card-tag protein">💪 ${Math.round(m.recipe.protein * days / m.recipe.servings)}g</span>
        </div>
      </div>
      <div class="meal-slot-body">
        <div class="meal-slot-name">${m.recipe.name}</div>
        <p class="text-secondary" style="font-size:0.86rem;margin-top:6px">${m.recipe.description}</p>
        <div class="macro-grid mt-16">
          <div class="macro-item cal"><div class="macro-value">${Math.round(m.recipe.calories * days / m.recipe.servings)}</div><div class="macro-label">Total Cal</div></div>
          <div class="macro-item protein"><div class="macro-value">${Math.round(m.recipe.protein * days / m.recipe.servings)}g</div><div class="macro-label">Total Pro</div></div>
          <div class="macro-item carbs"><div class="macro-value">${Math.round(m.recipe.carbs * days / m.recipe.servings)}g</div><div class="macro-label">Total Carb</div></div>
          <div class="macro-item fat"><div class="macro-value">${Math.round(m.recipe.fat * days / m.recipe.servings)}g</div><div class="macro-label">Total Fat</div></div>
        </div>
        <button class="btn btn-outline btn-sm mt-16" onclick="openRecipeModal('${m.recipe.id}', ${days})">View Scaled Recipe →</button>
      </div>
    </div>
  `).join('');

  const workflowSteps = buildWorkflow(breakfast, lunch, dinner);

  const statsHTML = `
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:32px">
      <div class="macro-item cal"><div class="macro-value">${days}</div><div class="macro-label">Days</div></div>
      <div class="macro-item protein"><div class="macro-value">${Math.round(totalProtein / days)}g</div><div class="macro-label">Daily Protein</div></div>
      <div class="macro-item cal"><div class="macro-value">${Math.round(totalCals / days)}</div><div class="macro-label">Daily Calories</div></div>
      <div class="macro-item carbs"><div class="macro-value">${totalPrepTime + totalCookTime}m</div><div class="macro-label">Total Cook Time</div></div>
    </div>
  `;

  return { mealSlotsHTML, statsHTML, workflowSteps };
}

/**
 * Build batch cooking workflow from 3 recipes
 */
function buildWorkflow(breakfast, lunch, dinner) {
  return [
    { title: 'Prep all ingredients', desc: 'Chop vegetables, portion proteins, measure dry goods, and mix marinades for all three meals before turning on any heat.' },
    { title: 'Start carbs first', desc: `Start rice/quinoa for ${lunch.name} and ${dinner.name} — they take the longest with no attention needed.` },
    { title: 'Marinate proteins', desc: `Apply marinades to proteins: ${dinner.name} proteins first (benefit from longer marination). Set ${lunch.name} chicken next.` },
    { title: `Cook ${dinner.name}`, desc: 'Start the longest-cooking dinner protein. Monitor and baste while working on other components.' },
    { title: `Prep ${breakfast.name}`, desc: 'While dinner cooks, prepare all breakfast components. This is usually the quickest and requires the least active cooking.' },
    { title: `Finish ${lunch.name}`, desc: 'Cook and assemble lunch components. Use any residual heat/same pan to be efficient.' },
    { title: 'Roast vegetables in batches', desc: 'Use the oven for any roasted vegetables across all recipes simultaneously on different trays.' },
    { title: 'Cool and portion', desc: 'Let all food cool 20 minutes. Portion into labelled containers by meal type. Never seal hot food.' },
    { title: 'Refrigerate and label', desc: 'Stack containers neatly. Label with day numbers if needed. Front-load the week so oldest meals are eaten first.' },
  ];
}

/* ─────────────────────────────────────────────────────────────
   SHOPPING LIST GENERATOR
───────────────────────────────────────────────────────────── */
const INGREDIENT_CATEGORIES = {
  proteins: ['chicken', 'beef', 'salmon', 'turkey', 'steak', 'flank', 'egg', 'eggs', 'cottage cheese', 'greek yogurt', 'yogurt', 'protein powder', 'whey'],
  carbs: ['rice', 'pasta', 'oats', 'quinoa', 'potato', 'potatoes', 'tortilla', 'flatbread', 'banana', 'berries', 'honey', 'corn'],
  vegetables: ['broccoli', 'tomato', 'tomatoes', 'cucumber', 'carrot', 'onion', 'garlic', 'ginger', 'spinach', 'lettuce', 'asparagus', 'mushroom', 'peas', 'pepper', 'jalapeño', 'avocado', 'cilantro', 'parsley', 'basil', 'green onion'],
  sauces: ['soy sauce', 'oyster sauce', 'gochujang', 'sriracha', 'mirin', 'sesame oil', 'teriyaki', 'tahini', 'olive oil', 'butter', 'vinegar', 'lime', 'lemon'],
  seasonings: ['salt', 'pepper', 'cumin', 'paprika', 'oregano', 'thyme', 'rosemary', 'turmeric', 'cinnamon', 'chilli', 'chipotle', 'vanilla', 'sugar', 'cornstarch', 'baking powder', 'sesame seeds'],
};

function categoriseIngredient(name) {
  const lower = name.toLowerCase();
  for (const [cat, keywords] of Object.entries(INGREDIENT_CATEGORIES)) {
    if (keywords.some(kw => lower.includes(kw))) return cat;
  }
  return 'seasonings'; // fallback
}

function generateShoppingList(recipes, days) {
  const combined = {};

  recipes.forEach(recipe => {
    const scaleFactor = days / recipe.servings;
    recipe.ingredients.forEach(ing => {
      const key = ing.name.toLowerCase();
      if (combined[key]) {
        combined[key].amount += ing.amount * scaleFactor;
      } else {
        combined[key] = {
          name: ing.name,
          amount: ing.amount * scaleFactor,
          unit: ing.unit,
          category: categoriseIngredient(ing.name)
        };
      }
    });
  });

  const byCategory = { proteins: [], carbs: [], vegetables: [], sauces: [], seasonings: [] };
  Object.values(combined).forEach(item => {
    const cat = item.category;
    byCategory[cat].push({
      name: item.name,
      amount: parseFloat(item.amount.toFixed(1)),
      unit: formatUnit(item.unit, item.amount)
    });
  });

  return byCategory;
}

/* ─────────────────────────────────────────────────────────────
   PAGE INITIALIZATION
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initSaveButtons();
  initMacroCalc();

  // Scroll-triggered fade animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in, .fade-in-1, .fade-in-2, .fade-in-3, .fade-in-4').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});

// Expose to global scope for onclick handlers
window.openRecipeModal = openRecipeModal;
window.closeRecipeModal = closeRecipeModal;
window.RECIPES = RECIPES;
window.generateWeeklyPlan = generateWeeklyPlan;
window.renderWeeklyPlan = renderWeeklyPlan;
window.generateShoppingList = generateShoppingList;
window.renderRecipeCard = renderRecipeCard;
window.getSavedMeals = getSavedMeals;
window.getAllRecipes = getAllRecipes;
window.isSaved = isSaved;
window.showToast = showToast;
