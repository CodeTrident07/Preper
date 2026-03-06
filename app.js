(function() {
// ============================================================
// PREPER — By Praanav
// app.js — Core data, recipe engine, utility functions
// ============================================================

// ─── DIETARY PREFERENCE SYSTEM ───────────────────────────────
const DIETARY_PREFS = {
  vegan: { label: "Vegan", icon: "🌱", excludes: ["meat","poultry","fish","seafood","dairy","eggs","honey"] },
  jain: { label: "Jain", icon: "🙏", excludes: ["meat","poultry","fish","seafood","eggs","root_veg"] },
  hindu_veg: { label: "Hindu Vegetarian", icon: "🪷", excludes: ["meat","poultry","fish","seafood","eggs"] },
  hindu_nonveg: { label: "Hindu Non-Veg", icon: "🕉️", excludes: ["beef","pork"] },
  non_veg: { label: "Non-Vegetarian", icon: "🍗", excludes: [] },
  halal: { label: "Muslim (Halal)", icon: "☪️", excludes: ["pork","alcohol"] },
};

// ─── RECIPE DATABASE ─────────────────────────────────────────
const RECIPES = {

  // ══════════════ BREAKFAST ══════════════
  breakfast: [

    {
      id: "b1",
      name: "High-Protein Overnight Oats",
      tags: ["vegan","jain","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🥣",
      gradient: "linear-gradient(135deg,#f7971e,#ffd200)",
      prepTime: 10, cookTime: 0, servings: 1,
      protein: 57, carbs: 82, fat: 18, calories: 714,
      ingredients: [
        { name: "Rolled oats", qty: 80, unit: "g", category: "Carbs" },
        { name: "Vanilla protein powder", qty: 30, unit: "g", category: "Proteins" },
        { name: "Almond milk (unsweetened)", qty: 200, unit: "ml", category: "Carbs" },
        { name: "Greek yogurt (0% fat)", qty: 100, unit: "g", category: "Proteins" },
        { name: "Chia seeds", qty: 10, unit: "g", category: "Carbs" },
        { name: "Honey", qty: 15, unit: "g", category: "Sauces" },
        { name: "Mixed berries (frozen ok)", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Cinnamon", qty: 2, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "In a mason jar, combine oats, protein powder, and chia seeds.",
        "Pour in almond milk and mix thoroughly so no powder clumps remain.",
        "Fold in Greek yogurt and honey.",
        "Top with berries and a pinch of cinnamon.",
        "Seal the jar and refrigerate overnight (minimum 6 hours).",
        "Prep up to 5 jars at once for the full week. Stays fresh 5 days.",
      ],
      storage: "Airtight mason jars, refrigerator, up to 5 days",
      reheat: "Eat cold or microwave 60 seconds and stir",
      batchTips: "Assemble all jars assembly-line style in under 15 minutes",
    },

    {
      id: "b2",
      name: "Greek Yogurt Protein Parfait",
      tags: ["jain","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🍨",
      gradient: "linear-gradient(135deg,#a8edea,#fed6e3)",
      prepTime: 8, cookTime: 0, servings: 1,
      protein: 63, carbs: 57, fat: 12, calories: 594,
      ingredients: [
        { name: "Greek yogurt (2%)", qty: 250, unit: "g", category: "Proteins" },
        { name: "Whey protein (vanilla)", qty: 25, unit: "g", category: "Proteins" },
        { name: "Granola (low sugar)", qty: 40, unit: "g", category: "Carbs" },
        { name: "Banana", qty: 100, unit: "g", category: "Carbs" },
        { name: "Strawberries", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Almond butter", qty: 15, unit: "g", category: "Proteins" },
        { name: "Honey", qty: 10, unit: "g", category: "Sauces" },
      ],
      steps: [
        "Stir protein powder into Greek yogurt until smooth.",
        "Layer yogurt into a bowl or jar.",
        "Add sliced banana and strawberries.",
        "Top with granola and drizzle almond butter + honey.",
        "Batch: Prep yogurt+protein mix in bulk, add toppings fresh daily.",
      ],
      storage: "Base stays 5 days in fridge; keep toppings separate",
      reheat: "Serve cold",
      batchTips: "Pre-mix yogurt+protein for 5 days; store toppings in small bags",
    },

    {
      id: "b3",
      name: "Egg & Avocado Breakfast Wraps",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🌯",
      gradient: "linear-gradient(135deg,#56ab2f,#a8e063)",
      prepTime: 10, cookTime: 15, servings: 1,
      protein: 51, carbs: 63, fat: 27, calories: 699,
      ingredients: [
        { name: "Whole eggs", qty: 3, unit: "pcs", category: "Proteins" },
        { name: "Whole wheat tortilla (large)", qty: 1, unit: "pcs", category: "Carbs" },
        { name: "Avocado", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Baby spinach", qty: 40, unit: "g", category: "Vegetables" },
        { name: "Cherry tomatoes", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Feta cheese", qty: 20, unit: "g", category: "Proteins" },
        { name: "Olive oil", qty: 5, unit: "ml", category: "Sauces" },
        { name: "Salt & black pepper", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Paprika", qty: 1, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Scramble eggs with salt, pepper, and paprika in olive oil over medium heat.",
        "Warm tortilla in dry pan 30 seconds each side.",
        "Mash avocado and spread on tortilla.",
        "Layer eggs, spinach, tomatoes, and feta.",
        "Wrap tightly. Slice in half. Wrap in foil for meal prep.",
        "Batch: Cook 4–5 wraps together, wrap in foil, refrigerate.",
      ],
      storage: "Wrap in foil, refrigerate, up to 3 days",
      reheat: "Microwave 60s in foil or pan-heat 2 min per side",
      batchTips: "Batch-scramble eggs for multiple wraps at once",
    },

    {
      id: "b4",
      name: "Protein Pancakes (Fluffy & High-Macro)",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🥞",
      gradient: "linear-gradient(135deg,#f8b500,#f05e1e)",
      prepTime: 8, cookTime: 12, servings: 1,
      protein: 60, carbs: 72, fat: 15, calories: 666,
      ingredients: [
        { name: "Oat flour", qty: 60, unit: "g", category: "Carbs" },
        { name: "Whey protein powder", qty: 30, unit: "g", category: "Proteins" },
        { name: "Eggs", qty: 2, unit: "pcs", category: "Proteins" },
        { name: "Banana (ripe)", qty: 100, unit: "g", category: "Carbs" },
        { name: "Almond milk", qty: 100, unit: "ml", category: "Carbs" },
        { name: "Baking powder", qty: 4, unit: "g", category: "Seasonings" },
        { name: "Vanilla extract", qty: 5, unit: "ml", category: "Sauces" },
        { name: "Greek yogurt (for topping)", qty: 50, unit: "g", category: "Proteins" },
        { name: "Fresh berries (for topping)", qty: 50, unit: "g", category: "Vegetables" },
      ],
      steps: [
        "Blend banana, eggs, almond milk, and vanilla until smooth.",
        "Whisk in oat flour, protein powder, and baking powder.",
        "Heat non-stick pan on medium-low. Spray lightly with oil.",
        "Pour small circles, cook 2–3 min until bubbles form, flip, 1 min more.",
        "Stack on parchment. Refrigerate stacked with parchment between layers.",
        "Batch: Make a full batch of 12–15 pancakes at once.",
      ],
      storage: "Stack with parchment between, refrigerate up to 4 days or freeze 2 months",
      reheat: "Microwave 45 sec or toaster 2 min",
      batchTips: "Use a ladle for consistent sizing and cook all at once",
    },

    {
      id: "b5",
      name: "Masala Scrambled Eggs with Roti",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍳",
      gradient: "linear-gradient(135deg,#ff6a00,#ee0979)",
      prepTime: 5, cookTime: 10, servings: 1,
      protein: 45, carbs: 52, fat: 21, calories: 585,
      ingredients: [
        { name: "Eggs", qty: 4, unit: "pcs", category: "Proteins" },
        { name: "Whole wheat roti / chapati", qty: 2, unit: "pcs", category: "Carbs" },
        { name: "Onion (small)", qty: 50, unit: "g", category: "Vegetables" },
        { name: "Green chilli (mild)", qty: 1, unit: "pcs", category: "Seasonings" },
        { name: "Tomato", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Cumin seeds", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Turmeric", qty: 1, unit: "g", category: "Seasonings" },
        { name: "Coriander powder", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Fresh coriander (cilantro)", qty: 10, unit: "g", category: "Vegetables" },
        { name: "Ghee or oil", qty: 8, unit: "ml", category: "Sauces" },
      ],
      steps: [
        "Heat ghee in pan, add cumin seeds until they splutter.",
        "Add onion and green chilli, cook 3 min until golden.",
        "Add tomato, turmeric, and coriander powder. Cook 2 min.",
        "Beat eggs and pour in. Scramble on low heat, keep creamy.",
        "Garnish with fresh coriander. Serve with warm rotis.",
        "Batch: Prep egg mixture, refrigerate up to 3 days.",
      ],
      storage: "Scrambled eggs 3 days, roti 5 days (separately, refrigerate)",
      reheat: "Microwave eggs 45s; pan-heat roti dry 30 sec each side",
      batchTips: "Prep onion-tomato masala base for the week in one go",
    },

    {
      id: "b6",
      name: "Vegan Tofu Scramble Bowl",
      tags: ["vegan","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🥘",
      gradient: "linear-gradient(135deg,#11998e,#38ef7d)",
      prepTime: 10, cookTime: 12, servings: 1,
      protein: 42, carbs: 60, fat: 18, calories: 570,
      ingredients: [
        { name: "Firm tofu", qty: 200, unit: "g", category: "Proteins" },
        { name: "Cooked quinoa", qty: 120, unit: "g", category: "Carbs" },
        { name: "Baby spinach", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Cherry tomatoes", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Bell pepper", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Turmeric", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Nutritional yeast", qty: 10, unit: "g", category: "Seasonings" },
        { name: "Cumin", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Soy sauce", qty: 10, unit: "ml", category: "Sauces" },
      ],
      steps: [
        "Crumble tofu into a bowl. Mix with turmeric, cumin, nutritional yeast, soy sauce.",
        "Heat olive oil in pan over medium-high. Add bell pepper, cook 2 min.",
        "Add tofu crumble. Cook 5–7 min, stirring, until golden edges.",
        "Add spinach, stir until wilted. Add tomatoes.",
        "Serve over quinoa. Season to taste.",
        "Batch: Cook large batch of tofu scramble and quinoa separately.",
      ],
      storage: "Airtight container, refrigerate up to 5 days",
      reheat: "Microwave 90 sec or pan-heat 2 min with a splash of water",
      batchTips: "Cook full block of tofu at once; portion into containers",
    },

    {
      id: "b7",
      name: "Jain Protein Smoothie Bowl",
      tags: ["jain","vegan","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🍓",
      gradient: "linear-gradient(135deg,#ec008c,#fc6767)",
      prepTime: 10, cookTime: 0, servings: 1,
      protein: 45, carbs: 82, fat: 12, calories: 618,
      ingredients: [
        { name: "Frozen mango chunks", qty: 150, unit: "g", category: "Carbs" },
        { name: "Frozen banana", qty: 100, unit: "g", category: "Carbs" },
        { name: "Plant protein powder", qty: 30, unit: "g", category: "Proteins" },
        { name: "Coconut milk", qty: 100, unit: "ml", category: "Carbs" },
        { name: "Hemp seeds", qty: 15, unit: "g", category: "Proteins" },
        { name: "Pumpkin seeds", qty: 15, unit: "g", category: "Proteins" },
        { name: "Granola", qty: 30, unit: "g", category: "Carbs" },
        { name: "Coconut flakes", qty: 10, unit: "g", category: "Carbs" },
      ],
      steps: [
        "Blend frozen mango, banana, protein powder, and coconut milk until thick.",
        "Pour into a bowl — it should be thick enough to eat with a spoon.",
        "Top with hemp seeds, pumpkin seeds, granola, and coconut flakes.",
        "Batch: Pre-blend bases and freeze in individual containers.",
      ],
      storage: "Blend fresh or freeze base for up to 1 month",
      reheat: "Thaw at room temp 5 min, top fresh",
      batchTips: "Portion blended base into freezer bags; thaw night before",
    },

    {
      id: "b8",
      name: "Cottage Cheese & Fruit Power Bowl",
      tags: ["hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🧁",
      gradient: "linear-gradient(135deg,#fbc2eb,#a6c1ee)",
      prepTime: 5, cookTime: 0, servings: 1,
      protein: 52, carbs: 60, fat: 9, calories: 531,
      ingredients: [
        { name: "Low-fat cottage cheese (paneer-style)", qty: 250, unit: "g", category: "Proteins" },
        { name: "Kiwi", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Mango", qty: 100, unit: "g", category: "Carbs" },
        { name: "Pomegranate seeds", qty: 30, unit: "g", category: "Vegetables" },
        { name: "Chia seeds", qty: 10, unit: "g", category: "Carbs" },
        { name: "Honey or agave", qty: 10, unit: "g", category: "Sauces" },
        { name: "Vanilla extract", qty: 3, unit: "ml", category: "Sauces" },
      ],
      steps: [
        "Stir vanilla and honey into cottage cheese.",
        "Dice kiwi and mango.",
        "Layer cottage cheese, then fruit, then pomegranate seeds and chia seeds.",
        "Batch: Prepare cottage cheese base for 5 days; add fruit fresh.",
      ],
      storage: "Base stays 5 days; fruit best added fresh",
      reheat: "Serve cold",
      batchTips: "Portion base into 5 jars at once for full week",
    },

    // ── NEW BREAKFAST RECIPES ──────────────────────────────────

    {
      id: "b9",
      name: "Peanut Butter Banana Protein Oat Bake",
      tags: ["vegan","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🥜",
      gradient: "linear-gradient(135deg,#c67c32,#f9d976)",
      prepTime: 8, cookTime: 25, servings: 1,
      protein: 54, carbs: 78, fat: 21, calories: 714,
      ingredients: [
        { name: "Rolled oats", qty: 90, unit: "g", category: "Carbs" },
        { name: "Plant/whey protein powder", qty: 30, unit: "g", category: "Proteins" },
        { name: "Banana (ripe, mashed)", qty: 120, unit: "g", category: "Carbs" },
        { name: "Peanut butter (natural)", qty: 30, unit: "g", category: "Proteins" },
        { name: "Almond milk", qty: 180, unit: "ml", category: "Carbs" },
        { name: "Baking powder", qty: 4, unit: "g", category: "Seasonings" },
        { name: "Cinnamon", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Maple syrup", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Dark chocolate chips", qty: 15, unit: "g", category: "Carbs" },
      ],
      steps: [
        "Preheat oven to 180°C/350°F. Grease a small baking dish or use muffin tin.",
        "Mash banana thoroughly. Mix with peanut butter, almond milk, maple syrup.",
        "Stir in oats, protein powder, baking powder, cinnamon.",
        "Fold in chocolate chips. Pour into dish.",
        "Bake 22–25 min until set and golden on top. Cool 5 min.",
        "Batch: Bake a large tray, slice into portions, refrigerate up to 5 days.",
      ],
      storage: "Airtight container, refrigerate 5 days or freeze 2 months",
      reheat: "Microwave 45 sec or eat at room temp",
      batchTips: "Double the batch and bake in a 9x13 pan — portion into 6–8 squares",
    },

    {
      id: "b10",
      name: "Savoury Oats with Poached Egg",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🥚",
      gradient: "linear-gradient(135deg,#4e54c8,#8f94fb)",
      prepTime: 5, cookTime: 12, servings: 1,
      protein: 48, carbs: 66, fat: 18, calories: 618,
      ingredients: [
        { name: "Rolled oats", qty: 80, unit: "g", category: "Carbs" },
        { name: "Eggs", qty: 2, unit: "pcs", category: "Proteins" },
        { name: "Chicken or veg stock", qty: 250, unit: "ml", category: "Sauces" },
        { name: "Baby spinach", qty: 40, unit: "g", category: "Vegetables" },
        { name: "Cherry tomatoes (halved)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Parmesan cheese", qty: 20, unit: "g", category: "Proteins" },
        { name: "White vinegar (for poaching)", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Black pepper + salt", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Chilli flakes", qty: 1, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Cook oats in stock instead of water — adds huge savory depth. 5 min.",
        "Stir in spinach and tomatoes in the last 1 min. Season well.",
        "Bring a pot of water to gentle simmer, add vinegar.",
        "Crack egg into a small cup, swirl water, slide egg in. Poach 3 min.",
        "Top oats with poached eggs, parmesan, chilli flakes.",
        "Batch: Cook oat base in bulk; poach fresh eggs each morning (3 min).",
      ],
      storage: "Oat base 4 days in fridge; poach eggs fresh",
      reheat: "Microwave oat base 60 sec; add fresh poached egg",
      batchTips: "Cook a full pot of savoury oats; reheat portions daily",
    },

    {
      id: "b11",
      name: "Chicken & Vegetable Breakfast Hash",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍳",
      gradient: "linear-gradient(135deg,#f093fb,#f5576c)",
      prepTime: 10, cookTime: 18, servings: 1,
      protein: 60, carbs: 57, fat: 18, calories: 630,
      ingredients: [
        { name: "Chicken breast (diced small)", qty: 180, unit: "g", category: "Proteins" },
        { name: "Baby potatoes (cubed)", qty: 150, unit: "g", category: "Carbs" },
        { name: "Bell pepper (diced)", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Zucchini (diced)", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Red onion (diced)", qty: 50, unit: "g", category: "Vegetables" },
        { name: "Smoked paprika", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Cumin", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Salt & black pepper", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Fresh parsley", qty: 8, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Par-boil cubed potatoes 6 min until just tender. Drain and dry.",
        "Heat olive oil in large pan on high. Add potatoes, cook 4 min until crispy.",
        "Add chicken, paprika, cumin, salt. Cook 5–6 min until golden.",
        "Add onion, pepper, zucchini. Cook 3 min until softened.",
        "Finish with fresh parsley. Taste and season.",
        "Batch: Make full pan, portion into containers for 4 days.",
      ],
      storage: "Airtight container, refrigerate 4 days",
      reheat: "Microwave 90 sec or pan-fry 2 min to crisp up potatoes again",
      batchTips: "Double the batch — it reheats brilliantly and actually gets better",
    },

    {
      id: "b12",
      name: "Spiced Moong Dal Chilla (Protein Crepes)",
      tags: ["vegan","jain","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🫓",
      gradient: "linear-gradient(135deg,#f7971e,#84fab0)",
      prepTime: 10, cookTime: 15, servings: 1,
      protein: 39, carbs: 54, fat: 12, calories: 480,
      ingredients: [
        { name: "Yellow moong dal (soaked 2hrs)", qty: 100, unit: "g", category: "Proteins" },
        { name: "Ginger (grated)", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Green chilli (mild)", qty: 1, unit: "pcs", category: "Seasonings" },
        { name: "Cumin seeds", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Turmeric", qty: 1, unit: "g", category: "Seasonings" },
        { name: "Salt", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Spinach (finely chopped)", qty: 40, unit: "g", category: "Vegetables" },
        { name: "Oil (for pan)", qty: 8, unit: "ml", category: "Sauces" },
        { name: "Green chutney (to serve)", qty: 30, unit: "g", category: "Sauces" },
      ],
      steps: [
        "Drain soaked moong dal. Blend with ginger, chilli, cumin, turmeric, salt and a little water to a smooth batter.",
        "Stir in chopped spinach.",
        "Heat non-stick pan on medium. Brush with oil.",
        "Pour a ladleful, spread into a thin circle. Cook 2–3 min until edges lift.",
        "Flip, cook 1 min more. Repeat for all batter.",
        "Batch: Make 8–10 chillas, stack with parchment between, refrigerate 4 days.",
      ],
      storage: "Stack with parchment, refrigerate 4 days or freeze 1 month",
      reheat: "Pan-heat 1 min each side or microwave 30 sec",
      batchTips: "Blend batter in bulk the night before; cook fresh takes only 15 min",
    },

    {
      id: "b13",
      name: "Tuna Avocado Rice Cake Stack",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍙",
      gradient: "linear-gradient(135deg,#0cebeb,#20e3b2,#29ffc6)",
      prepTime: 8, cookTime: 0, servings: 1,
      protein: 57, carbs: 42, fat: 21, calories: 585,
      ingredients: [
        { name: "Canned tuna in water", qty: 150, unit: "g", category: "Proteins" },
        { name: "Rice cakes (plain)", qty: 4, unit: "pcs", category: "Carbs" },
        { name: "Avocado", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Greek yogurt", qty: 40, unit: "g", category: "Proteins" },
        { name: "Lemon juice", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Cucumber (sliced)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Cherry tomatoes", qty: 50, unit: "g", category: "Vegetables" },
        { name: "Everything bagel seasoning or sesame", qty: 4, unit: "g", category: "Seasonings" },
        { name: "Salt & black pepper", qty: 2, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Drain tuna. Mix with Greek yogurt, lemon juice, salt, pepper.",
        "Mash avocado with a pinch of salt and lemon.",
        "Spread avocado on rice cakes.",
        "Top with tuna mixture, cucumber slices, tomatoes.",
        "Sprinkle everything bagel seasoning.",
        "Batch: Pre-mix tuna and avocado separately; assemble in 2 min each morning.",
      ],
      storage: "Tuna mix 3 days; avocado best fresh daily",
      reheat: "No heat needed — eat cold",
      batchTips: "Keep tuna mix pre-made in fridge; takes 2 min to assemble",
    },

  ], // end breakfast

  // ══════════════ LUNCH ══════════════
  lunch: [

    {
      id: "l1",
      name: "Korean Beef Rice Bowl (Bulgogi)",
      tags: ["non_veg"],
      emoji: "🥩",
      gradient: "linear-gradient(135deg,#b8001f,#ff6b6b)",
      prepTime: 15, cookTime: 20, servings: 1,
      protein: 65, carbs: 94, fat: 20, calories: 826,
      ingredients: [
        { name: "Lean beef strips", qty: 180, unit: "g", category: "Proteins" },
        { name: "Jasmine rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Soy sauce", qty: 30, unit: "ml", category: "Sauces" },
        { name: "Sesame oil", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Honey", qty: 15, unit: "g", category: "Sauces" },
        { name: "Ginger (fresh)", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Broccoli florets", qty: 120, unit: "g", category: "Vegetables" },
        { name: "Cucumber", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Sesame seeds", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Spring onions", qty: 20, unit: "g", category: "Vegetables" },
      ],
      steps: [
        "Mix soy sauce, sesame oil, honey, and ginger into marinade.",
        "Marinate beef strips minimum 20 min (overnight for batch).",
        "Cook rice: 1 cup rice to 1.5 cup water, 18 min covered.",
        "Steam broccoli 4 min or roast 400°F/200°C for 12 min.",
        "Sear beef in hot pan 3–4 min, do not crowd the pan.",
        "Assemble: rice, beef, broccoli, cucumber, spring onions, sesame.",
      ],
      storage: "Airtight container, refrigerate up to 4 days",
      reheat: "Microwave 90 sec with a splash of water on rice",
      batchTips: "Marinate beef the night before; cook rice and batch in one session",
    },

    {
      id: "l2",
      name: "Chicken Burrito Bowl",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🌯",
      gradient: "linear-gradient(135deg,#f7971e,#ffd200)",
      prepTime: 12, cookTime: 22, servings: 1,
      protein: 75, carbs: 99, fat: 17, calories: 847,
      ingredients: [
        { name: "Chicken breast", qty: 200, unit: "g", category: "Proteins" },
        { name: "Brown rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Black beans (canned)", qty: 100, unit: "g", category: "Proteins" },
        { name: "Corn kernels", qty: 60, unit: "g", category: "Carbs" },
        { name: "Salsa", qty: 60, unit: "g", category: "Sauces" },
        { name: "Greek yogurt (sub for sour cream)", qty: 40, unit: "g", category: "Proteins" },
        { name: "Lime juice", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Cumin + smoked paprika + chilli powder", qty: 6, unit: "g", category: "Seasonings" },
        { name: "Bell peppers (mixed)", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Romaine lettuce", qty: 40, unit: "g", category: "Vegetables" },
        { name: "Avocado", qty: 50, unit: "g", category: "Vegetables" },
      ],
      steps: [
        "Season chicken with cumin, paprika, chilli, salt, and lime juice.",
        "Grill or pan-sear chicken 6–7 min per side. Rest, then slice.",
        "Cook rice. Heat beans with a pinch of cumin.",
        "Sauté bell peppers in same pan as chicken, 3 min.",
        "Build bowl: rice, beans, peppers, chicken, corn, salsa, avocado, Greek yogurt.",
        "Batch: Cook all chicken at once; portion into separate containers.",
      ],
      storage: "Containers up to 4 days (avocado added fresh)",
      reheat: "Microwave 90 sec; add avocado and yogurt after heating",
      batchTips: "Double or triple the chicken batch — it's the most time-consuming part",
    },

    {
      id: "l3",
      name: "Mediterranean Chicken Wrap",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🫔",
      gradient: "linear-gradient(135deg,#0f3443,#34e89e)",
      prepTime: 10, cookTime: 15, servings: 1,
      protein: 64, carbs: 70, fat: 23, calories: 748,
      ingredients: [
        { name: "Chicken thighs (boneless)", qty: 180, unit: "g", category: "Proteins" },
        { name: "Whole wheat wrap", qty: 1, unit: "pcs", category: "Carbs" },
        { name: "Hummus", qty: 50, unit: "g", category: "Proteins" },
        { name: "Roasted red peppers", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Cucumber", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Cherry tomatoes", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Feta cheese", qty: 25, unit: "g", category: "Proteins" },
        { name: "Mixed greens", qty: 30, unit: "g", category: "Vegetables" },
        { name: "Lemon juice", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Oregano + cumin", qty: 4, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 8, unit: "ml", category: "Sauces" },
      ],
      steps: [
        "Marinate chicken thighs in lemon juice, olive oil, oregano, cumin, salt.",
        "Pan-cook or grill 6–7 min each side. Slice into strips.",
        "Warm wrap in dry pan.",
        "Spread hummus on wrap. Layer greens, chicken, peppers, cucumber, tomatoes, feta.",
        "Roll tightly and wrap in foil for meal prep.",
        "Batch: Cook all chicken at once; assemble wraps for 3–4 days.",
      ],
      storage: "Wrapped in foil, refrigerate up to 3 days",
      reheat: "Eat cold or microwave unwrapped 60 sec",
      batchTips: "Slice all veg in bulk while chicken cooks",
    },

    {
      id: "l4",
      name: "High-Protein Pasta with Chicken",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍝",
      gradient: "linear-gradient(135deg,#c94b4b,#4b134f)",
      prepTime: 10, cookTime: 20, servings: 1,
      protein: 72, carbs: 102, fat: 14, calories: 841,
      ingredients: [
        { name: "Chickpea or lentil pasta", qty: 90, unit: "g", category: "Carbs" },
        { name: "Chicken breast (diced)", qty: 160, unit: "g", category: "Proteins" },
        { name: "Tomato passata", qty: 150, unit: "ml", category: "Sauces" },
        { name: "Cherry tomatoes", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Baby spinach", qty: 50, unit: "g", category: "Vegetables" },
        { name: "Parmesan (optional)", qty: 15, unit: "g", category: "Proteins" },
        { name: "Dried oregano + basil", qty: 4, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Chilli flakes", qty: 1, unit: "g", category: "Seasonings" },
        { name: "Salt & pepper", qty: 3, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Cook pasta al dente per package directions. Reserve 50ml pasta water.",
        "Season and pan-sear diced chicken until golden, 5–6 min. Set aside.",
        "In same pan, add olive oil, cherry tomatoes, cook 2 min until blistered.",
        "Add passata, oregano, basil, chilli. Simmer 5 min.",
        "Add chicken and spinach. Toss with pasta and pasta water.",
        "Top with parmesan. Batch into 4–5 containers.",
      ],
      storage: "Airtight container, refrigerate up to 4 days",
      reheat: "Microwave 90 sec with a splash of water, stir halfway",
      batchTips: "Cook a full pack of pasta; sauce doubles or triples easily",
    },

    {
      id: "l5",
      name: "Grilled Salmon Rice Bowl",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🐟",
      gradient: "linear-gradient(135deg,#f77062,#fe5196)",
      prepTime: 8, cookTime: 15, servings: 1,
      protein: 70, carbs: 84, fat: 23, calories: 829,
      ingredients: [
        { name: "Salmon fillet", qty: 200, unit: "g", category: "Proteins" },
        { name: "Jasmine rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Edamame (shelled)", qty: 60, unit: "g", category: "Proteins" },
        { name: "Cucumber", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Avocado", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Soy sauce", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Sesame oil", qty: 8, unit: "ml", category: "Sauces" },
        { name: "Honey", qty: 10, unit: "g", category: "Sauces" },
        { name: "Sesame seeds", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Pickled ginger (optional)", qty: 15, unit: "g", category: "Seasonings" },
        { name: "Spring onions", qty: 15, unit: "g", category: "Vegetables" },
      ],
      steps: [
        "Mix soy sauce, sesame oil, honey for glaze.",
        "Brush salmon with glaze. Pan-sear skin-side down 4 min, flip 3 min.",
        "Cook rice. Boil edamame 3 min.",
        "Slice cucumber and avocado.",
        "Build bowl: rice, flaked salmon, edamame, cucumber, avocado, sesame seeds, spring onions.",
        "Drizzle extra glaze over top.",
      ],
      storage: "Containers up to 3 days (avocado fresh daily)",
      reheat: "Microwave 60 sec (salmon may dry; add dash of water)",
      batchTips: "Cook multiple salmon fillets on a sheet pan at once",
    },

    {
      id: "l6",
      name: "Tuna Nicoise Power Bowl",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🐡",
      gradient: "linear-gradient(135deg,#1d78af,#71c7e9)",
      prepTime: 10, cookTime: 12, servings: 1,
      protein: 64, carbs: 65, fat: 20, calories: 716,
      ingredients: [
        { name: "Canned tuna in water", qty: 185, unit: "g", category: "Proteins" },
        { name: "Baby potatoes", qty: 150, unit: "g", category: "Carbs" },
        { name: "Green beans", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Eggs (hard-boiled)", qty: 2, unit: "pcs", category: "Proteins" },
        { name: "Mixed salad leaves", qty: 50, unit: "g", category: "Vegetables" },
        { name: "Cherry tomatoes", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Kalamata olives", qty: 30, unit: "g", category: "Vegetables" },
        { name: "Dijon mustard", qty: 10, unit: "g", category: "Sauces" },
        { name: "Lemon juice", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Olive oil", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Salt & black pepper", qty: 3, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Boil baby potatoes 10 min until tender. Halve when cool.",
        "Blanch green beans 3 min in boiling water, transfer to ice water.",
        "Hard-boil eggs 9 min, cool and halve.",
        "Whisk dressing: dijon, lemon juice, olive oil, salt, pepper.",
        "Drain and season tuna.",
        "Build bowl: leaves, potatoes, green beans, tuna, eggs, tomatoes, olives. Drizzle dressing.",
      ],
      storage: "Dressing separate; everything else 3 days in fridge",
      reheat: "Eat cold or warm only the potatoes",
      batchTips: "Batch boil eggs and potatoes; canned tuna is no-cook",
    },

    {
      id: "l7",
      name: "Paneer Tikka Rice Bowl",
      tags: ["jain","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🧆",
      gradient: "linear-gradient(135deg,#ff9a00,#ff6a00)",
      prepTime: 15, cookTime: 20, servings: 1,
      protein: 52, carbs: 80, fat: 23, calories: 742,
      ingredients: [
        { name: "Paneer (firm)", qty: 200, unit: "g", category: "Proteins" },
        { name: "Basmati rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Greek yogurt (marinade)", qty: 60, unit: "g", category: "Proteins" },
        { name: "Lemon juice", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Tikka masala powder", qty: 8, unit: "g", category: "Seasonings" },
        { name: "Cumin seeds", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Bell pepper (cubed)", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Red onion (cubed)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Ghee or oil", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Fresh mint chutney", qty: 30, unit: "g", category: "Sauces" },
        { name: "Chaat masala", qty: 2, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Cube paneer. Mix yogurt, tikka masala, lemon juice, cumin. Marinate paneer 30+ min.",
        "Thread paneer, pepper, and onion on skewers (or cook in batches in pan).",
        "Cook on high heat grill pan or oven grill 8–10 min, turning once, until charred edges.",
        "Cook basmati rice.",
        "Serve tikka over rice. Top with mint chutney and chaat masala.",
        "Batch: Marinate overnight; cook all skewers at once.",
      ],
      storage: "Refrigerate up to 4 days. Chutney separate.",
      reheat: "Microwave 90 sec; or re-grill 2 min for char",
      batchTips: "Double marinade and freeze extra marinated paneer",
    },

    {
      id: "l8",
      name: "Spicy Fish Taco Bowl",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🌮",
      gradient: "linear-gradient(135deg,#2af598,#009efd)",
      prepTime: 12, cookTime: 12, servings: 1,
      protein: 58, carbs: 72, fat: 20, calories: 710,
      ingredients: [
        { name: "White fish fillets (tilapia or cod)", qty: 200, unit: "g", category: "Proteins" },
        { name: "Brown rice (cooked)", qty: 160, unit: "g", category: "Carbs" },
        { name: "Purple cabbage (shredded)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Mango salsa", qty: 80, unit: "g", category: "Sauces" },
        { name: "Lime juice", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Smoked paprika + cumin + chilli", qty: 6, unit: "g", category: "Seasonings" },
        { name: "Greek yogurt", qty: 40, unit: "g", category: "Proteins" },
        { name: "Jalapeño (sliced)", qty: 20, unit: "g", category: "Vegetables" },
        { name: "Avocado", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Olive oil", qty: 8, unit: "ml", category: "Sauces" },
        { name: "Corn kernels", qty: 50, unit: "g", category: "Carbs" },
      ],
      steps: [
        "Season fish with paprika, cumin, chilli, salt, lime. Drizzle oil.",
        "Pan-sear or oven-bake at 400°F/200°C for 10–12 min until flaky.",
        "Cook rice. Mix Greek yogurt with lime juice (crema).",
        "Assemble: rice, flaked fish, cabbage, mango salsa, corn, jalapeño, avocado, crema.",
        "Batch: Cook fish the day of or 1 day ahead.",
      ],
      storage: "Fish separately 2 days; rice and veg 4 days",
      reheat: "Microwave fish gently 45 sec; or eat cold as a salad bowl",
      batchTips: "Bake multiple fish fillets on one tray for efficiency",
    },

    {
      id: "l9",
      name: "Chickpea & Spinach Masala Bowl",
      tags: ["vegan","jain","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🫘",
      gradient: "linear-gradient(135deg,#cc2b5e,#753a88)",
      prepTime: 10, cookTime: 20, servings: 1,
      protein: 32, carbs: 84, fat: 14, calories: 594,
      ingredients: [
        { name: "Chickpeas (canned)", qty: 200, unit: "g", category: "Proteins" },
        { name: "Baby spinach", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Canned tomatoes", qty: 150, unit: "g", category: "Vegetables" },
        { name: "Basmati rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Coconut milk", qty: 80, unit: "ml", category: "Sauces" },
        { name: "Garam masala", qty: 4, unit: "g", category: "Seasonings" },
        { name: "Cumin seeds", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Turmeric", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Coriander powder", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Fresh ginger", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Oil", qty: 10, unit: "ml", category: "Sauces" },
      ],
      steps: [
        "Heat oil, add cumin seeds until sputtering.",
        "Add ginger, cook 1 min. Add tomatoes, all spices, cook 5 min.",
        "Add chickpeas and coconut milk. Simmer 10 min.",
        "Stir in spinach until wilted. Taste and adjust.",
        "Serve over basmati rice.",
        "Batch: Make a huge pot; it tastes better the next day.",
      ],
      storage: "Refrigerate up to 5 days; freezes excellently",
      reheat: "Microwave 90 sec with a splash of water",
      batchTips: "Double the recipe — it reheats perfectly",
    },

    {
      id: "l10",
      name: "Lemon Herb Cod with Quinoa",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🐠",
      gradient: "linear-gradient(135deg,#43c6ac,#f8ffae)",
      prepTime: 8, cookTime: 18, servings: 1,
      protein: 67, carbs: 70, fat: 14, calories: 687,
      ingredients: [
        { name: "Cod fillet", qty: 200, unit: "g", category: "Proteins" },
        { name: "Quinoa (cooked)", qty: 160, unit: "g", category: "Carbs" },
        { name: "Asparagus", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Cherry tomatoes", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Lemon (zest + juice)", qty: 1, unit: "pcs", category: "Sauces" },
        { name: "Fresh parsley", qty: 10, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 12, unit: "ml", category: "Sauces" },
        { name: "Capers", qty: 10, unit: "g", category: "Seasonings" },
        { name: "Salt & pepper", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Dijon mustard", qty: 8, unit: "g", category: "Sauces" },
      ],
      steps: [
        "Cook quinoa per package: 1 part quinoa, 2 parts water, 15 min covered.",
        "Toss asparagus and tomatoes with olive oil, salt, roast 15 min at 200°C.",
        "Season cod with salt, pepper, mustard, lemon zest.",
        "Pan-sear cod 3–4 min per side until golden and flaky.",
        "Plate quinoa, roast veg, cod. Squeeze lemon, scatter capers and parsley.",
      ],
      storage: "Refrigerate up to 3 days",
      reheat: "Microwave 60 sec gently; can eat cold",
      batchTips: "Roast multiple cod fillets and veg trays simultaneously",
    },

    // ── NEW LUNCH RECIPES ─────────────────────────────────────

    {
      id: "l11",
      name: "Thai Basil Chicken (Pad Krapow)",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🌿",
      gradient: "linear-gradient(135deg,#11998e,#38ef7d)",
      prepTime: 8, cookTime: 12, servings: 1,
      protein: 70, carbs: 80, fat: 17, calories: 766,
      ingredients: [
        { name: "Chicken mince", qty: 220, unit: "g", category: "Proteins" },
        { name: "Jasmine rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Fresh Thai basil or regular basil", qty: 20, unit: "g", category: "Seasonings" },
        { name: "Oyster sauce", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Soy sauce", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Fish sauce", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Honey", qty: 8, unit: "g", category: "Sauces" },
        { name: "Red chilli (sliced)", qty: 1, unit: "pcs", category: "Seasonings" },
        { name: "Bell pepper (diced)", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Oil", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Fried egg (optional topper)", qty: 1, unit: "pcs", category: "Proteins" },
      ],
      steps: [
        "Mix oyster sauce, soy sauce, fish sauce, honey into stir-fry sauce.",
        "Heat oil in wok or large pan on HIGH heat until smoking.",
        "Add chicken mince. Break up and cook 3–4 min until browned.",
        "Add bell pepper and chilli, stir-fry 2 min.",
        "Pour in sauce. Toss 1 min until glossy.",
        "Remove from heat. Fold in fresh basil (it wilts from residual heat).",
        "Serve over rice. Top with fried egg if using.",
        "Batch: Cook full batch of mince, portion over rice. Fried egg daily.",
      ],
      storage: "Refrigerate up to 4 days",
      reheat: "Microwave 90 sec or wok-toss 2 min",
      batchTips: "Cook 1kg of mince in one go — scales perfectly",
    },

    {
      id: "l12",
      name: "Honey Garlic Chicken Rice Bowl",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍯",
      gradient: "linear-gradient(135deg,#f7971e,#ffd200)",
      prepTime: 8, cookTime: 20, servings: 1,
      protein: 72, carbs: 90, fat: 14, calories: 786,
      ingredients: [
        { name: "Chicken thighs (boneless)", qty: 200, unit: "g", category: "Proteins" },
        { name: "Jasmine rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Honey", qty: 20, unit: "g", category: "Sauces" },
        { name: "Soy sauce", qty: 25, unit: "ml", category: "Sauces" },
        { name: "Rice vinegar", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Sesame oil", qty: 8, unit: "ml", category: "Sauces" },
        { name: "Broccoli florets", qty: 120, unit: "g", category: "Vegetables" },
        { name: "Carrot (julienned)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Sesame seeds + spring onions", qty: 8, unit: "g", category: "Seasonings" },
        { name: "Cornstarch", qty: 8, unit: "g", category: "Sauces" },
      ],
      steps: [
        "Mix honey, soy, rice vinegar, sesame oil, cornstarch for glaze.",
        "Slice chicken thighs into strips. Pan-sear on high 4 min each side.",
        "Pour glaze over chicken. Toss 1–2 min until sticky and coated.",
        "Steam broccoli and blanch carrots 3 min.",
        "Build bowl: rice, glazed chicken, veg. Top with sesame + spring onions.",
        "Batch: Cook full tray of chicken thighs in oven 200°C 20 min, then glaze.",
      ],
      storage: "Refrigerate up to 4 days",
      reheat: "Microwave 90 sec; chicken stays juicy",
      batchTips: "Thighs are more forgiving than breast when reheated — ideal for batch",
    },

    {
      id: "l13",
      name: "Miso Glazed Salmon Bento",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍣",
      gradient: "linear-gradient(135deg,#fc5c7d,#6a3093)",
      prepTime: 10, cookTime: 14, servings: 1,
      protein: 67, carbs: 75, fat: 23, calories: 789,
      ingredients: [
        { name: "Salmon fillet", qty: 200, unit: "g", category: "Proteins" },
        { name: "White miso paste", qty: 20, unit: "g", category: "Sauces" },
        { name: "Mirin", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Soy sauce", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Honey", qty: 10, unit: "g", category: "Sauces" },
        { name: "Jasmine rice (cooked)", qty: 160, unit: "g", category: "Carbs" },
        { name: "Edamame", qty: 60, unit: "g", category: "Proteins" },
        { name: "Baby pak choi", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Sesame seeds", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Pickled ginger", qty: 15, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Whisk miso, mirin, soy, honey into glaze. Coat salmon, marinate 15 min min.",
        "Grill or broil salmon 5–6 min per side until caramelised. Watch closely — miso burns fast.",
        "Steam pak choi 2 min. Boil edamame 3 min.",
        "Build bento: rice, miso salmon, pak choi, edamame, pickled ginger, sesame.",
        "Batch: Marinate and cook 4 fillets at once under the broiler.",
      ],
      storage: "Refrigerate up to 3 days",
      reheat: "Microwave 60 sec gently; great eaten cold too",
      batchTips: "Marinate overnight for deeper flavour; cook all fillets in one broiler session",
    },

    {
      id: "l14",
      name: "Lamb Kofta Rice Bowl",
      tags: ["non_veg","halal"],
      emoji: "🫕",
      gradient: "linear-gradient(135deg,#b8001f,#e05f00)",
      prepTime: 15, cookTime: 18, servings: 1,
      protein: 70, carbs: 84, fat: 26, calories: 838,
      ingredients: [
        { name: "Lean lamb mince", qty: 200, unit: "g", category: "Proteins" },
        { name: "Basmati rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Cumin + coriander + paprika", qty: 6, unit: "g", category: "Seasonings" },
        { name: "Cinnamon", qty: 1, unit: "g", category: "Seasonings" },
        { name: "Greek yogurt (tzatziki base)", qty: 80, unit: "g", category: "Proteins" },
        { name: "Cucumber (grated)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Lemon juice", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Cherry tomatoes", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Red onion (sliced)", qty: 40, unit: "g", category: "Vegetables" },
        { name: "Fresh mint", qty: 10, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 8, unit: "ml", category: "Sauces" },
      ],
      steps: [
        "Mix lamb mince with cumin, coriander, paprika, cinnamon, salt. Form into oval koftas.",
        "Grill or pan-cook koftas 4–5 min per side on medium-high.",
        "Make quick tzatziki: grate and squeeze cucumber, mix with yogurt, lemon, mint, salt.",
        "Slice tomatoes and red onion. Dress with olive oil and lemon.",
        "Build bowl: rice, koftas, salad, tzatziki.",
        "Batch: Make and cook full batch of koftas; refrigerate for up to 3 days.",
      ],
      storage: "Refrigerate up to 3 days",
      reheat: "Microwave 75 sec or pan-heat 2 min to crisp up",
      batchTips: "Shape and freeze raw koftas — cook from frozen in 12 min",
    },

    {
      id: "l15",
      name: "Prawn Fried Rice",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍤",
      gradient: "linear-gradient(135deg,#f64f59,#c471ed,#12c2e9)",
      prepTime: 10, cookTime: 12, servings: 1,
      protein: 61, carbs: 87, fat: 14, calories: 722,
      ingredients: [
        { name: "Large prawns (peeled)", qty: 180, unit: "g", category: "Proteins" },
        { name: "Day-old cooked rice", qty: 200, unit: "g", category: "Carbs" },
        { name: "Eggs", qty: 2, unit: "pcs", category: "Proteins" },
        { name: "Frozen peas + corn", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Carrot (diced small)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Spring onions", qty: 20, unit: "g", category: "Vegetables" },
        { name: "Soy sauce", qty: 25, unit: "ml", category: "Sauces" },
        { name: "Sesame oil", qty: 8, unit: "ml", category: "Sauces" },
        { name: "Oyster sauce", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Oil (for wok)", qty: 10, unit: "ml", category: "Sauces" },
        { name: "White pepper", qty: 2, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Day-old rice is essential — fresh rice makes it mushy. Refrigerate overnight.",
        "Heat wok on HIGHEST heat. Add oil until smoking.",
        "Stir-fry prawns 1–2 min until just pink. Remove and set aside.",
        "Add carrot and peas, stir-fry 2 min. Push to side, scramble eggs.",
        "Add rice. Toss everything together. Add soy, oyster sauce, sesame oil, white pepper.",
        "Add prawns back. Fold in spring onions. Serve hot.",
        "Batch: Cook rice the day before; the whole dish takes 12 min.",
      ],
      storage: "Refrigerate up to 3 days",
      reheat: "Microwave 90 sec or wok-fry 3 min with a splash of water",
      batchTips: "Cook a huge pot of rice the night before; batch-fry in 2 wok sessions",
    },

    {
      id: "l16",
      name: "Cajun Chicken Caesar Wrap",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🌮",
      gradient: "linear-gradient(135deg,#1a1a2e,#e94560)",
      prepTime: 10, cookTime: 15, servings: 1,
      protein: 67, carbs: 64, fat: 23, calories: 737,
      ingredients: [
        { name: "Chicken breast", qty: 190, unit: "g", category: "Proteins" },
        { name: "Large whole wheat tortilla", qty: 1, unit: "pcs", category: "Carbs" },
        { name: "Romaine lettuce (shredded)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Parmesan (shaved)", qty: 20, unit: "g", category: "Proteins" },
        { name: "Caesar dressing (light)", qty: 30, unit: "g", category: "Sauces" },
        { name: "Cajun seasoning", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 8, unit: "ml", category: "Sauces" },
        { name: "Lemon juice", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Croutons (small)", qty: 15, unit: "g", category: "Carbs" },
        { name: "Cherry tomatoes", qty: 60, unit: "g", category: "Vegetables" },
      ],
      steps: [
        "Coat chicken in cajun seasoning and olive oil. Pan-sear 6–7 min per side.",
        "Rest chicken 3 min, then slice thin.",
        "Toss romaine, tomatoes, and croutons with caesar dressing.",
        "Warm tortilla 30 sec. Layer salad mix, chicken, and parmesan.",
        "Roll tightly. Wrap in foil.",
        "Batch: Cook all chicken at once; keep salad undressed until assembly.",
      ],
      storage: "Assembled wraps 2 days; keep dressing separate for 3 days",
      reheat: "Eat cold or briefly warm the chicken separately",
      batchTips: "Keep the salad mix dry and dress at the last minute to avoid sogginess",
    },

    {
      id: "l17",
      name: "Ginger Soy Tuna Poke Bowl",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🐟",
      gradient: "linear-gradient(135deg,#1d78af,#71c7e9)",
      prepTime: 12, cookTime: 0, servings: 1,
      protein: 64, carbs: 72, fat: 17, calories: 696,
      ingredients: [
        { name: "Sushi-grade tuna or canned tuna", qty: 180, unit: "g", category: "Proteins" },
        { name: "Sushi rice or jasmine rice (cooked)", qty: 170, unit: "g", category: "Carbs" },
        { name: "Soy sauce", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Sesame oil", qty: 8, unit: "ml", category: "Sauces" },
        { name: "Rice vinegar", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Fresh ginger (grated)", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Avocado", qty: 70, unit: "g", category: "Vegetables" },
        { name: "Cucumber (diced)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Edamame", qty: 50, unit: "g", category: "Proteins" },
        { name: "Mango (diced)", qty: 60, unit: "g", category: "Carbs" },
        { name: "Sesame seeds + sriracha drizzle", qty: 8, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "If using fresh tuna: dice into cubes. If canned: drain well.",
        "Mix soy sauce, sesame oil, rice vinegar, ginger for dressing.",
        "Toss tuna in half the dressing. Marinate 5–10 min.",
        "Build bowl: rice base, marinated tuna, avocado, cucumber, edamame, mango.",
        "Drizzle remaining dressing. Top with sesame and sriracha.",
        "Batch: Prep all toppings in bulk; assemble bowls daily (5 min).",
      ],
      storage: "Components separate 3 days; avocado and mango fresh",
      reheat: "Eat cold — this is a cold bowl",
      batchTips: "Pre-portion rice into containers; prep toppings in bulk on Sunday",
    },

    {
      id: "l18",
      name: "Chicken Shawarma Bowl",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🫔",
      gradient: "linear-gradient(135deg,#d4a855,#c0392b)",
      prepTime: 12, cookTime: 20, servings: 1,
      protein: 72, carbs: 80, fat: 20, calories: 792,
      ingredients: [
        { name: "Chicken thighs (boneless)", qty: 200, unit: "g", category: "Proteins" },
        { name: "Basmati rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Shawarma spice blend (cumin,coriander,turmeric,paprika,cardamom)", qty: 8, unit: "g", category: "Seasonings" },
        { name: "Greek yogurt (for marinade)", qty: 50, unit: "g", category: "Proteins" },
        { name: "Lemon juice", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Garlic powder", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Cherry tomatoes", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Cucumber", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Red onion (thin sliced)", qty: 40, unit: "g", category: "Vegetables" },
        { name: "Hummus", qty: 60, unit: "g", category: "Proteins" },
        { name: "Fresh parsley", qty: 10, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Marinate chicken in yogurt, shawarma spices, lemon juice, garlic powder — minimum 1 hour, overnight best.",
        "Grill or cook in oven at 220°C/425°F for 18–20 min until charred edges form.",
        "Rest 5 min. Slice thin.",
        "Dice tomatoes and cucumber. Slice red onion thin.",
        "Build bowl: rice, sliced shawarma chicken, salad, hummus. Sprinkle parsley.",
        "Batch: Marinate and cook large batch of thighs; slices reheat perfectly.",
      ],
      storage: "Refrigerate up to 4 days",
      reheat: "Microwave 90 sec or grill pan 2 min",
      batchTips: "Marinate 1kg of thighs overnight — one cook session feeds 5 days",
    },

    {
      id: "l19",
      name: "Tofu Peanut Noodle Bowl",
      tags: ["vegan","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🥜",
      gradient: "linear-gradient(135deg,#f7b733,#fc4a1a)",
      prepTime: 12, cookTime: 10, servings: 1,
      protein: 41, carbs: 84, fat: 23, calories: 713,
      ingredients: [
        { name: "Firm tofu (pressed, cubed)", qty: 180, unit: "g", category: "Proteins" },
        { name: "Soba or rice noodles (cooked)", qty: 150, unit: "g", category: "Carbs" },
        { name: "Peanut butter (natural)", qty: 30, unit: "g", category: "Proteins" },
        { name: "Soy sauce", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Sesame oil", qty: 8, unit: "ml", category: "Sauces" },
        { name: "Rice vinegar", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Honey or maple syrup", qty: 10, unit: "g", category: "Sauces" },
        { name: "Lime juice", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Shredded cabbage + carrot", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Cucumber (ribbons)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Crushed peanuts + sesame seeds", qty: 15, unit: "g", category: "Proteins" },
        { name: "Chilli flakes", qty: 1, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Whisk peanut butter, soy, sesame oil, vinegar, honey, lime juice with 2 tbsp warm water until smooth sauce.",
        "Pan-fry tofu in sesame oil on high until golden on all sides, 5–6 min.",
        "Cook noodles per package. Rinse under cold water.",
        "Toss noodles with half the sauce. Shred cabbage and carrot.",
        "Build bowl: noodles, tofu, cabbage, carrot, cucumber ribbons.",
        "Drizzle remaining sauce. Top with peanuts, sesame, chilli.",
      ],
      storage: "Keep sauce separate; everything else 4 days",
      reheat: "Eat cold or microwave noodles 60 sec; add fresh sauce",
      batchTips: "Make a big jar of peanut sauce; noodles and tofu batch perfectly",
    },

    {
      id: "l20",
      name: "Rajma (Kidney Bean Curry) Rice Bowl",
      tags: ["vegan","jain","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🫘",
      gradient: "linear-gradient(135deg,#8B0000,#d4530a)",
      prepTime: 10, cookTime: 25, servings: 1,
      protein: 35, carbs: 99, fat: 12, calories: 644,
      ingredients: [
        { name: "Kidney beans (canned)", qty: 240, unit: "g", category: "Proteins" },
        { name: "Basmati rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Canned tomatoes (crushed)", qty: 150, unit: "g", category: "Vegetables" },
        { name: "Onion (diced)", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Ginger paste", qty: 8, unit: "g", category: "Seasonings" },
        { name: "Cumin seeds", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Coriander powder", qty: 4, unit: "g", category: "Seasonings" },
        { name: "Garam masala", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Turmeric", qty: 1, unit: "g", category: "Seasonings" },
        { name: "Oil or ghee", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Fresh coriander", qty: 10, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Heat oil. Add cumin seeds until they sizzle.",
        "Add onion. Cook on medium-high 5–6 min until golden brown.",
        "Add ginger, cook 1 min. Add tomatoes, turmeric, coriander powder.",
        "Cook tomato masala 8 min until oil separates.",
        "Add kidney beans with a little of their liquid. Mash a few beans.",
        "Simmer 10 min. Add garam masala. Garnish with coriander.",
        "Serve over basmati. Tastes even better the next day.",
      ],
      storage: "Refrigerate 5 days; freezes 3 months",
      reheat: "Microwave 90 sec; add a splash of water as it thickens",
      batchTips: "Make a huge pot — the ultimate weekly batch-cook staple",
    },

  ], // end lunch

  // ══════════════ DINNER ══════════════
  dinner: [

    {
      id: "d1",
      name: "Teriyaki Salmon with Jasmine Rice",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍱",
      gradient: "linear-gradient(135deg,#ff6a00,#ee0979)",
      prepTime: 10, cookTime: 20, servings: 1,
      protein: 82, carbs: 107, fat: 30, calories: 1046,
      ingredients: [
        { name: "Salmon fillet", qty: 220, unit: "g", category: "Proteins" },
        { name: "Jasmine rice (cooked)", qty: 200, unit: "g", category: "Carbs" },
        { name: "Soy sauce", qty: 30, unit: "ml", category: "Sauces" },
        { name: "Mirin", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Honey", qty: 15, unit: "g", category: "Sauces" },
        { name: "Ginger (fresh grated)", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Sesame oil", qty: 8, unit: "ml", category: "Sauces" },
        { name: "Broccoli florets", qty: 120, unit: "g", category: "Vegetables" },
        { name: "Edamame", qty: 50, unit: "g", category: "Proteins" },
        { name: "Sesame seeds + spring onions", qty: 10, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Mix soy, mirin, honey, ginger, sesame oil for teriyaki sauce.",
        "Marinate salmon 20 min. Reserve remaining sauce.",
        "Cook rice. Steam broccoli and edamame 4 min.",
        "Sear salmon skin-side down 4 min. Flip 2 min. Glaze with sauce last 1 min.",
        "Plate rice, salmon, broccoli, edamame. Drizzle extra sauce. Top with sesame + onion.",
        "Batch: Cook 4 fillets at once on a sheet pan under broiler.",
      ],
      storage: "Refrigerate up to 3 days",
      reheat: "Microwave 75 sec with damp paper towel over container",
      batchTips: "Sheet-pan method: salmon + veg all in one tray, 12 min at 200°C",
    },

    {
      id: "d2",
      name: "Garlic Chicken Quinoa Bowl",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍗",
      gradient: "linear-gradient(135deg,#ffd200,#f7971e)",
      prepTime: 10, cookTime: 25, servings: 1,
      protein: 89, carbs: 96, fat: 20, calories: 931,
      ingredients: [
        { name: "Chicken breast", qty: 220, unit: "g", category: "Proteins" },
        { name: "Quinoa (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Roasted bell peppers", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Zucchini", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Sun-dried tomatoes", qty: 30, unit: "g", category: "Vegetables" },
        { name: "Lemon juice", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Dried herbs (oregano, thyme)", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Smoked paprika", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 12, unit: "ml", category: "Sauces" },
        { name: "Feta cheese", qty: 25, unit: "g", category: "Proteins" },
      ],
      steps: [
        "Season chicken with herbs, smoked paprika, lemon, olive oil, salt.",
        "Roast chicken in oven 200°C/400°F for 22–25 min. Rest 5 min, slice.",
        "Cook quinoa. Cube and roast zucchini with peppers 15 min.",
        "Assemble: quinoa, sliced chicken, roasted veg, sun-dried tomatoes, feta.",
        "Drizzle with lemon and olive oil.",
        "Batch: Roast a full tray of chicken breasts at once.",
      ],
      storage: "Refrigerate up to 4 days",
      reheat: "Microwave 90 sec; add splash of water to quinoa",
      batchTips: "Oven does all the work — batch cook 6 breasts at once",
    },

    {
      id: "d3",
      name: "High-Protein Beef Stir Fry",
      tags: ["non_veg"],
      emoji: "🥢",
      gradient: "linear-gradient(135deg,#1a1a2e,#e94560)",
      prepTime: 12, cookTime: 12, servings: 1,
      protein: 82, carbs: 91, fat: 23, calories: 901,
      ingredients: [
        { name: "Lean beef strips", qty: 200, unit: "g", category: "Proteins" },
        { name: "Egg noodles or rice", qty: 160, unit: "g", category: "Carbs" },
        { name: "Broccoli florets", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Snap peas", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Carrot (julienned)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Oyster sauce", qty: 25, unit: "ml", category: "Sauces" },
        { name: "Soy sauce", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Sesame oil", qty: 8, unit: "ml", category: "Sauces" },
        { name: "Ginger + sesame seeds", qty: 8, unit: "g", category: "Seasonings" },
        { name: "Cornstarch", qty: 10, unit: "g", category: "Sauces" },
      ],
      steps: [
        "Toss beef strips in cornstarch, soy sauce, sesame oil. Marinate 10 min.",
        "Cook noodles/rice per package.",
        "Heat wok or large pan until smoking. Sear beef in batches 2 min. Set aside.",
        "Stir-fry veg in same wok 3 min high heat.",
        "Add beef back, pour in oyster sauce, soy, ginger. Toss 1 min.",
        "Serve over noodles. Top with sesame seeds.",
      ],
      storage: "Refrigerate up to 3 days",
      reheat: "Microwave 90 sec with splash of water; or wok-toss 2 min",
      batchTips: "Pre-cut and marinate beef the night before; veg takes 5 min total",
    },

    {
      id: "d4",
      name: "Steak & Roasted Sweet Potato",
      tags: ["non_veg"],
      emoji: "🥩",
      gradient: "linear-gradient(135deg,#ff4e50,#f9d423)",
      prepTime: 10, cookTime: 25, servings: 1,
      protein: 86, carbs: 82, fat: 26, calories: 931,
      ingredients: [
        { name: "Sirloin or rump steak", qty: 220, unit: "g", category: "Proteins" },
        { name: "Sweet potato (large)", qty: 200, unit: "g", category: "Carbs" },
        { name: "Green beans", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Cherry tomatoes", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Rosemary + thyme", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 12, unit: "ml", category: "Sauces" },
        { name: "Chimichurri sauce", qty: 30, unit: "g", category: "Sauces" },
        { name: "Salt & black pepper", qty: 4, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Cube sweet potato. Toss with oil, rosemary, salt. Roast 200°C for 25 min.",
        "Blanch green beans 3 min. Pat steak dry, season generously.",
        "Sear steak in HOT pan 3 min per side for medium. Rest 5 min.",
        "Halve cherry tomatoes, toss in pan drippings 1 min.",
        "Slice steak. Plate with sweet potato, beans, tomatoes. Drizzle chimichurri.",
        "Batch: Roast sweet potato in bulk; cook steaks individually for freshness.",
      ],
      storage: "Steak best day-of; sweet potato 5 days; veg 4 days",
      reheat: "Microwave veg and potato; slice steak cold for best texture",
      batchTips: "Roast large batch sweet potato; cook steak when eating",
    },

    {
      id: "d5",
      name: "Baked Lemon Herb Salmon",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🐟",
      gradient: "linear-gradient(135deg,#6a3093,#a044ff)",
      prepTime: 8, cookTime: 15, servings: 1,
      protein: 82, carbs: 74, fat: 33, calories: 917,
      ingredients: [
        { name: "Salmon fillet", qty: 220, unit: "g", category: "Proteins" },
        { name: "Baby potatoes (halved)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Asparagus", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Lemon (sliced)", qty: 1, unit: "pcs", category: "Sauces" },
        { name: "Dill (fresh)", qty: 8, unit: "g", category: "Seasonings" },
        { name: "Capers", qty: 10, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Dijon mustard", qty: 10, unit: "g", category: "Sauces" },
        { name: "Salt & pepper", qty: 3, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Par-boil potatoes 10 min. Toss with oil, salt, transfer to baking tray.",
        "Spread mustard over salmon. Top with lemon slices, dill, capers.",
        "Add asparagus to tray. Drizzle all with olive oil.",
        "Bake at 200°C/400°F for 12–15 min until salmon is just cooked.",
        "Squeeze fresh lemon over everything.",
        "Batch: Bake 4 fillets at once on two trays.",
      ],
      storage: "Refrigerate up to 3 days",
      reheat: "Microwave 60 sec gently or eat cold as a salad",
      batchTips: "One-tray meal — everything cooks together",
    },

    {
      id: "d6",
      name: "Butter Chicken with Basmati",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍛",
      gradient: "linear-gradient(135deg,#f7971e,#ffd200)",
      prepTime: 15, cookTime: 30, servings: 1,
      protein: 82, carbs: 107, fat: 26, calories: 1010,
      ingredients: [
        { name: "Chicken thighs (boneless)", qty: 200, unit: "g", category: "Proteins" },
        { name: "Basmati rice (cooked)", qty: 200, unit: "g", category: "Carbs" },
        { name: "Tomato passata", qty: 150, unit: "ml", category: "Sauces" },
        { name: "Coconut cream", qty: 60, unit: "ml", category: "Sauces" },
        { name: "Greek yogurt (marinade)", qty: 50, unit: "g", category: "Proteins" },
        { name: "Butter or ghee", qty: 10, unit: "g", category: "Sauces" },
        { name: "Garam masala", qty: 4, unit: "g", category: "Seasonings" },
        { name: "Turmeric + coriander", qty: 4, unit: "g", category: "Seasonings" },
        { name: "Ginger (fresh)", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Chilli powder (mild)", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Fresh coriander", qty: 10, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Marinate chicken in yogurt, garam masala, turmeric, coriander powder, salt — 1 hour minimum.",
        "Grill or pan-cook chicken until charred and cooked through. Set aside.",
        "In same pan, heat ghee. Add ginger, cook 1 min.",
        "Add passata, garam masala, chilli, salt. Simmer 8 min.",
        "Stir in coconut cream. Add sliced chicken. Simmer 5 min.",
        "Serve over basmati. Garnish with fresh coriander.",
      ],
      storage: "Refrigerate up to 4 days; freezes excellently",
      reheat: "Microwave 90 sec with a splash of water",
      batchTips: "Make double sauce; it improves with time and freezes well",
    },

    {
      id: "d7",
      name: "Fish Curry with Coconut Rice",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🎣",
      gradient: "linear-gradient(135deg,#00b09b,#96c93d)",
      prepTime: 12, cookTime: 20, servings: 1,
      protein: 73, carbs: 99, fat: 26, calories: 944,
      ingredients: [
        { name: "White fish (tilapia or pollock)", qty: 200, unit: "g", category: "Proteins" },
        { name: "Basmati rice (cooked with coconut milk)", qty: 200, unit: "g", category: "Carbs" },
        { name: "Coconut milk", qty: 120, unit: "ml", category: "Sauces" },
        { name: "Canned tomatoes", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Turmeric", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Cumin seeds", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Coriander powder", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Green chilli", qty: 1, unit: "pcs", category: "Seasonings" },
        { name: "Fresh ginger", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Spinach", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Lime juice", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Oil", qty: 10, unit: "ml", category: "Sauces" },
      ],
      steps: [
        "Cook basmati with 50/50 water and coconut milk for fragrant rice.",
        "Heat oil, add cumin seeds. Add ginger and green chilli, cook 1 min.",
        "Add tomatoes, turmeric, coriander. Simmer 5 min.",
        "Pour in coconut milk. Simmer 3 min. Add fish pieces gently.",
        "Cook fish in sauce 6–8 min until cooked. Stir in spinach.",
        "Squeeze lime. Serve over coconut rice.",
      ],
      storage: "Refrigerate up to 3 days",
      reheat: "Microwave 90 sec; add splash of water to loosen sauce",
      batchTips: "Make curry base in bulk; add fresh fish per portion when eating",
    },

    {
      id: "d8",
      name: "Dal Tadka with Brown Rice",
      tags: ["vegan","jain","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🫕",
      gradient: "linear-gradient(135deg,#f7b733,#fc4a1a)",
      prepTime: 10, cookTime: 30, servings: 1,
      protein: 40, carbs: 107, fat: 16, calories: 742,
      ingredients: [
        { name: "Red lentils (masoor dal)", qty: 100, unit: "g", category: "Proteins" },
        { name: "Brown rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Canned tomatoes", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Cumin seeds", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Mustard seeds", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Turmeric", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Coriander powder", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Garam masala", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Green chilli", qty: 1, unit: "pcs", category: "Seasonings" },
        { name: "Fresh ginger", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Ghee or oil", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Fresh coriander", qty: 10, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Rinse lentils. Pressure cook or simmer with 3x water + turmeric until soft (15–20 min).",
        "Heat ghee in separate pan. Add cumin and mustard seeds.",
        "Add ginger, chilli, cook 1 min. Add tomatoes, coriander, garam masala.",
        "Cook 5 min. Pour tadka over cooked lentils. Mix well.",
        "Serve with brown rice. Garnish with fresh coriander.",
        "Batch: Make huge pot of dal — freezes perfectly for 3 months.",
      ],
      storage: "Refrigerate 5 days; freeze 3 months",
      reheat: "Microwave 90 sec with a splash of water; it thickens when cold",
      batchTips: "The ultimate batch-cook — one pot feeds the whole week",
    },

    {
      id: "d9",
      name: "Chilli Lime Prawn Stir Fry",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🦐",
      gradient: "linear-gradient(135deg,#f64f59,#c471ed,#12c2e9)",
      prepTime: 10, cookTime: 10, servings: 1,
      protein: 69, carbs: 82, fat: 16, calories: 756,
      ingredients: [
        { name: "Large prawns (peeled, deveined)", qty: 200, unit: "g", category: "Proteins" },
        { name: "Jasmine rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Broccoli + snap peas", qty: 120, unit: "g", category: "Vegetables" },
        { name: "Lime juice", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Chilli flakes", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Soy sauce", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Honey", qty: 10, unit: "g", category: "Sauces" },
        { name: "Sesame oil", qty: 8, unit: "ml", category: "Sauces" },
        { name: "Spring onions", qty: 20, unit: "g", category: "Vegetables" },
        { name: "Sesame seeds", qty: 5, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Mix lime, soy, honey, sesame oil, chilli for sauce.",
        "Cook rice. Blanch broccoli and snap peas 2 min.",
        "Toss prawns in half the sauce. Sear in hot pan 1–2 min per side.",
        "Add veg back. Pour in remaining sauce. Toss 1 min.",
        "Serve over rice. Top with spring onions and sesame seeds.",
      ],
      storage: "Prawns best day-of or 1 day ahead; veg and rice 4 days",
      reheat: "Microwave 60 sec gently; prawns can get rubbery if overheated",
      batchTips: "Cook rice in bulk; prawns cook in under 5 min",
    },

    {
      id: "d10",
      name: "Tofu & Vegetable Green Curry",
      tags: ["vegan","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🌿",
      gradient: "linear-gradient(135deg,#11998e,#38ef7d)",
      prepTime: 12, cookTime: 18, servings: 1,
      protein: 43, carbs: 91, fat: 30, calories: 795,
      ingredients: [
        { name: "Firm tofu (pressed)", qty: 200, unit: "g", category: "Proteins" },
        { name: "Jasmine rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Green curry paste", qty: 30, unit: "g", category: "Sauces" },
        { name: "Coconut milk", qty: 150, unit: "ml", category: "Sauces" },
        { name: "Zucchini (cubed)", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Bell pepper", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Baby corn", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Spinach", qty: 50, unit: "g", category: "Vegetables" },
        { name: "Lime juice", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Soy sauce", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Thai basil or regular basil", qty: 10, unit: "g", category: "Seasonings" },
        { name: "Oil", qty: 10, unit: "ml", category: "Sauces" },
      ],
      steps: [
        "Press tofu 10 min. Cube and fry in oil until golden on all sides. Set aside.",
        "In same pan, fry curry paste 1 min until fragrant.",
        "Add coconut milk, soy, lime. Bring to gentle simmer.",
        "Add zucchini, pepper, baby corn. Simmer 5 min.",
        "Add tofu and spinach. Cook 2 min more.",
        "Serve over rice. Top with basil.",
      ],
      storage: "Refrigerate up to 4 days; tofu stays good in sauce",
      reheat: "Microwave 90 sec; stir well",
      batchTips: "Make double batch of curry — rice cooker handles rice hands-free",
    },

    // ── NEW DINNER RECIPES ────────────────────────────────────

    {
      id: "d11",
      name: "Harissa Chicken with Couscous",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🌶️",
      gradient: "linear-gradient(135deg,#c0392b,#f39c12)",
      prepTime: 10, cookTime: 22, servings: 1,
      protein: 86, carbs: 92, fat: 23, calories: 927,
      ingredients: [
        { name: "Chicken thighs (boneless)", qty: 220, unit: "g", category: "Proteins" },
        { name: "Couscous", qty: 80, unit: "g", category: "Carbs" },
        { name: "Harissa paste", qty: 25, unit: "g", category: "Sauces" },
        { name: "Greek yogurt (to serve)", qty: 60, unit: "g", category: "Proteins" },
        { name: "Lemon juice", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Olive oil", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Roasted red peppers", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Spinach", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Cherry tomatoes", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Fresh mint + coriander", qty: 12, unit: "g", category: "Seasonings" },
        { name: "Cumin + smoked paprika", qty: 4, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Coat chicken thighs in harissa, olive oil, cumin, paprika, and lemon. Marinate 20 min+.",
        "Grill or roast at 220°C/425°F for 20–22 min until charred.",
        "Pour boiling water over couscous (1:1.5 ratio), cover 5 min, fluff with fork.",
        "Stir spinach, tomatoes, and roasted peppers into warm couscous.",
        "Slice chicken. Serve on couscous with cool Greek yogurt and herbs.",
        "Batch: Roast full tray of thighs; couscous takes 5 min to make.",
      ],
      storage: "Refrigerate 4 days; yogurt separate",
      reheat: "Microwave 90 sec; couscous stays fluffy",
      batchTips: "Harissa-marinated thighs can be frozen raw for later",
    },

    {
      id: "d12",
      name: "Beef & Broccoli Noodle Bowl",
      tags: ["non_veg"],
      emoji: "🥢",
      gradient: "linear-gradient(135deg,#1a1a2e,#16213e,#e94560)",
      prepTime: 12, cookTime: 14, servings: 1,
      protein: 79, carbs: 96, fat: 23, calories: 914,
      ingredients: [
        { name: "Beef sirloin strips", qty: 200, unit: "g", category: "Proteins" },
        { name: "Udon or egg noodles (cooked)", qty: 160, unit: "g", category: "Carbs" },
        { name: "Broccoli florets", qty: 150, unit: "g", category: "Vegetables" },
        { name: "Soy sauce", qty: 25, unit: "ml", category: "Sauces" },
        { name: "Oyster sauce", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Sesame oil", qty: 8, unit: "ml", category: "Sauces" },
        { name: "Cornstarch", qty: 10, unit: "g", category: "Sauces" },
        { name: "Beef stock", qty: 60, unit: "ml", category: "Sauces" },
        { name: "Ginger + sesame seeds", qty: 8, unit: "g", category: "Seasonings" },
        { name: "Oil", qty: 10, unit: "ml", category: "Sauces" },
      ],
      steps: [
        "Toss beef strips in cornstarch, 1 tbsp soy, sesame oil. Rest 10 min.",
        "Cook noodles. Blanch broccoli 2 min. Mix remaining soy, oyster sauce, stock into sauce.",
        "Sear beef in smoking-hot wok in batches — 90 sec each. Remove.",
        "Stir-fry broccoli 2 min. Add ginger.",
        "Return beef, pour in sauce. Toss 1 min until glossy.",
        "Serve over noodles. Top with sesame seeds.",
      ],
      storage: "Refrigerate 3 days",
      reheat: "Wok-toss 2 min or microwave 90 sec with splash of water",
      batchTips: "Marinate beef overnight; the stir-fry itself takes only 6 min",
    },

    {
      id: "d13",
      name: "Lemon Pepper Baked Cod with Sweet Potato Mash",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🐟",
      gradient: "linear-gradient(135deg,#43c6ac,#f8ffae)",
      prepTime: 10, cookTime: 22, servings: 1,
      protein: 73, carbs: 82, fat: 16, calories: 782,
      ingredients: [
        { name: "Cod or haddock fillet", qty: 220, unit: "g", category: "Proteins" },
        { name: "Sweet potato (large)", qty: 220, unit: "g", category: "Carbs" },
        { name: "Lemon (zest + juice)", qty: 1, unit: "pcs", category: "Sauces" },
        { name: "Black pepper (coarse)", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 12, unit: "ml", category: "Sauces" },
        { name: "Garlic powder", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Steamed broccoli or green beans", qty: 120, unit: "g", category: "Vegetables" },
        { name: "Almond milk (for mash)", qty: 40, unit: "ml", category: "Carbs" },
        { name: "Salt", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Fresh dill or parsley", qty: 8, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Cube sweet potato. Boil 15 min until tender. Drain, mash with almond milk and salt.",
        "Season cod with lemon zest, coarse pepper, garlic powder, salt, olive oil.",
        "Bake at 200°C/400°F for 12–14 min until just flaking.",
        "Steam broccoli 4 min.",
        "Plate: sweet potato mash, cod, broccoli. Squeeze fresh lemon. Scatter dill.",
        "Batch: Bake 4 fillets at once; mash a large batch of sweet potato.",
      ],
      storage: "Refrigerate 3 days",
      reheat: "Microwave 75 sec; or eat cod cold over fresh salad",
      batchTips: "Mash a huge batch of sweet potato — keeps 5 days in fridge",
    },

    {
      id: "d14",
      name: "Chicken Tikka Masala (Lighter Version)",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍛",
      gradient: "linear-gradient(135deg,#ff6a00,#f7971e)",
      prepTime: 15, cookTime: 28, servings: 1,
      protein: 86, carbs: 99, fat: 23, calories: 954,
      ingredients: [
        { name: "Chicken breast (cubed)", qty: 220, unit: "g", category: "Proteins" },
        { name: "Basmati rice (cooked)", qty: 190, unit: "g", category: "Carbs" },
        { name: "Greek yogurt (marinade)", qty: 60, unit: "g", category: "Proteins" },
        { name: "Tikka masala spice blend", qty: 8, unit: "g", category: "Seasonings" },
        { name: "Canned tomatoes (crushed)", qty: 120, unit: "g", category: "Vegetables" },
        { name: "Coconut milk (light)", qty: 80, unit: "ml", category: "Sauces" },
        { name: "Ginger (fresh grated)", qty: 6, unit: "g", category: "Seasonings" },
        { name: "Lemon juice", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Oil or ghee", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Fresh coriander + lime wedge", qty: 12, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Marinate chicken in yogurt, half the tikka masala, lemon juice — 1 hour min.",
        "Grill or pan-cook marinated chicken until charred, 6–8 min. Set aside.",
        "Heat oil. Add ginger and remaining tikka masala. Cook 1 min.",
        "Add crushed tomatoes. Simmer 8 min.",
        "Stir in coconut milk. Add chicken. Simmer 5 min.",
        "Serve over rice. Garnish with coriander and lime.",
      ],
      storage: "Refrigerate 4 days; freezes up to 3 months",
      reheat: "Microwave 90 sec; add a splash of water",
      batchTips: "Make 3x the sauce — freeze in portions for instant future meals",
    },

    {
      id: "d15",
      name: "Sesame Crusted Tuna with Stir-Fried Greens",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🐡",
      gradient: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
      prepTime: 8, cookTime: 10, servings: 1,
      protein: 82, carbs: 69, fat: 26, calories: 851,
      ingredients: [
        { name: "Tuna steak (fresh)", qty: 220, unit: "g", category: "Proteins" },
        { name: "Mixed sesame seeds (black + white)", qty: 20, unit: "g", category: "Seasonings" },
        { name: "Jasmine rice (cooked)", qty: 160, unit: "g", category: "Carbs" },
        { name: "Bok choy", qty: 120, unit: "g", category: "Vegetables" },
        { name: "Snap peas", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Soy sauce", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Sesame oil", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Ginger (grated)", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Ponzu or citrus soy sauce", qty: 20, unit: "ml", category: "Sauces" },
        { name: "Oil (for searing)", qty: 8, unit: "ml", category: "Sauces" },
      ],
      steps: [
        "Press sesame seeds onto all sides of the tuna steak.",
        "Heat pan until very hot. Sear tuna 60–90 sec per side (rare inside). Rest 2 min.",
        "Stir-fry bok choy and snap peas in sesame oil with ginger, 3 min high heat.",
        "Add soy sauce to veg, toss 30 sec.",
        "Slice tuna. Serve over rice with stir-fried greens. Drizzle ponzu.",
        "Batch: Stir-fry veg and cook rice in bulk; sear tuna fresh per serving.",
      ],
      storage: "Veg + rice 4 days; tuna best cooked fresh (takes only 3 min)",
      reheat: "Heat rice and veg; cook fresh tuna slab — it's worth the 3 min",
      batchTips: "Pre-portion sesame-coated tuna steaks in fridge ready to sear",
    },

    {
      id: "d16",
      name: "Thai Green Chicken Curry",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍜",
      gradient: "linear-gradient(135deg,#56ab2f,#a8e063)",
      prepTime: 10, cookTime: 20, servings: 1,
      protein: 82, carbs: 91, fat: 30, calories: 954,
      ingredients: [
        { name: "Chicken breast (sliced)", qty: 200, unit: "g", category: "Proteins" },
        { name: "Jasmine rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Green curry paste", qty: 30, unit: "g", category: "Sauces" },
        { name: "Coconut milk", qty: 150, unit: "ml", category: "Sauces" },
        { name: "Chicken stock", qty: 80, unit: "ml", category: "Sauces" },
        { name: "Zucchini (sliced)", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Baby corn", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Bell pepper (strips)", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Fish sauce", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Lime juice", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Thai basil or regular basil", qty: 10, unit: "g", category: "Seasonings" },
        { name: "Oil", qty: 8, unit: "ml", category: "Sauces" },
      ],
      steps: [
        "Fry green curry paste in oil 1 min until very fragrant.",
        "Add sliced chicken. Cook 3 min, stirring.",
        "Pour in coconut milk and stock. Bring to gentle simmer.",
        "Add zucchini, baby corn, pepper. Simmer 8 min.",
        "Season with fish sauce and lime juice. Taste and adjust.",
        "Serve over rice. Top with fresh basil.",
        "Batch: Make double. It improves overnight — one of the best meal-prep curries.",
      ],
      storage: "Refrigerate 4 days; freezes 3 months",
      reheat: "Microwave 90 sec or simmer 3 min on stove",
      batchTips: "Make a huge batch — the curry base is hands-off simmering",
    },

    {
      id: "d17",
      name: "BBQ Pulled Chicken with Slaw",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🍖",
      gradient: "linear-gradient(135deg,#c0392b,#8B0000)",
      prepTime: 10, cookTime: 30, servings: 1,
      protein: 82, carbs: 86, fat: 16, calories: 812,
      ingredients: [
        { name: "Chicken breast", qty: 220, unit: "g", category: "Proteins" },
        { name: "BBQ sauce (low sugar)", qty: 50, unit: "g", category: "Sauces" },
        { name: "Sweet potato (cubed)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Purple cabbage (shredded)", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Carrot (grated)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Greek yogurt (slaw dressing)", qty: 40, unit: "g", category: "Proteins" },
        { name: "Apple cider vinegar", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Honey", qty: 8, unit: "g", category: "Sauces" },
        { name: "Smoked paprika + cumin", qty: 4, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 8, unit: "ml", category: "Sauces" },
      ],
      steps: [
        "Season chicken with smoked paprika, cumin, salt. Bake at 190°C/375°F for 28–30 min.",
        "Remove chicken. Shred using two forks while still hot.",
        "Toss shredded chicken with BBQ sauce.",
        "Cube and roast sweet potato 200°C/400°F 22 min with olive oil and salt.",
        "Make slaw: mix cabbage, carrot, Greek yogurt, vinegar, honey, salt.",
        "Serve BBQ chicken over sweet potato with slaw on the side.",
      ],
      storage: "Refrigerate 4 days; slaw 2 days (undressed 4 days)",
      reheat: "Microwave 90 sec; BBQ chicken stays moist",
      batchTips: "Bake 1kg of chicken at once; shreds in 2 min and portioned for the week",
    },

    {
      id: "d18",
      name: "Masala Prawn with Coconut Rice",
      tags: ["hindu_nonveg","non_veg","halal"],
      emoji: "🦐",
      gradient: "linear-gradient(135deg,#f77062,#fe5196)",
      prepTime: 10, cookTime: 15, servings: 1,
      protein: 66, carbs: 96, fat: 23, calories: 868,
      ingredients: [
        { name: "Jumbo prawns (peeled)", qty: 200, unit: "g", category: "Proteins" },
        { name: "Basmati rice (cooked with coconut milk)", qty: 190, unit: "g", category: "Carbs" },
        { name: "Canned tomatoes", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Coconut milk", qty: 60, unit: "ml", category: "Sauces" },
        { name: "Cumin seeds", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Turmeric", qty: 1, unit: "g", category: "Seasonings" },
        { name: "Coriander powder", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Chilli powder (mild)", qty: 2, unit: "g", category: "Seasonings" },
        { name: "Ginger paste", qty: 6, unit: "g", category: "Seasonings" },
        { name: "Spinach", qty: 50, unit: "g", category: "Vegetables" },
        { name: "Lime juice", qty: 15, unit: "ml", category: "Sauces" },
        { name: "Oil", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Fresh coriander", qty: 8, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Cook rice with 50/50 water and coconut milk for fragrant base.",
        "Heat oil, add cumin seeds. Add ginger, cook 1 min.",
        "Add tomatoes, turmeric, coriander powder, chilli. Cook 5 min.",
        "Add coconut milk. Simmer 3 min.",
        "Add prawns. Cook 3–4 min until just pink — don't overcook.",
        "Stir in spinach. Squeeze lime. Garnish with coriander.",
      ],
      storage: "Refrigerate 2 days (prawns are best fresh); curry base 4 days",
      reheat: "Microwave 60 sec gently; add a splash of coconut milk",
      batchTips: "Make curry base in bulk; add fresh prawns when eating for best texture",
    },

    {
      id: "d19",
      name: "Black Bean & Roasted Vegetable Enchilada Bowl",
      tags: ["vegan","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🌯",
      gradient: "linear-gradient(135deg,#8B0000,#c0392b,#f39c12)",
      prepTime: 12, cookTime: 25, servings: 1,
      protein: 36, carbs: 102, fat: 20, calories: 739,
      ingredients: [
        { name: "Black beans (canned)", qty: 200, unit: "g", category: "Proteins" },
        { name: "Brown rice (cooked)", qty: 180, unit: "g", category: "Carbs" },
        { name: "Bell peppers (mixed, cubed)", qty: 100, unit: "g", category: "Vegetables" },
        { name: "Zucchini (cubed)", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Red onion (wedges)", qty: 60, unit: "g", category: "Vegetables" },
        { name: "Corn kernels", qty: 60, unit: "g", category: "Carbs" },
        { name: "Enchilada sauce (canned)", qty: 80, unit: "ml", category: "Sauces" },
        { name: "Smoked paprika + cumin + chilli", qty: 5, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 10, unit: "ml", category: "Sauces" },
        { name: "Avocado", qty: 70, unit: "g", category: "Vegetables" },
        { name: "Fresh coriander + lime", qty: 12, unit: "g", category: "Seasonings" },
      ],
      steps: [
        "Toss peppers, zucchini, and onion with olive oil and spices. Roast 200°C/400°F 20 min.",
        "Warm black beans in small pan with a splash of enchilada sauce.",
        "Build bowl: brown rice, black beans, roasted veg, corn.",
        "Drizzle enchilada sauce over everything.",
        "Top with sliced avocado, fresh coriander, squeeze of lime.",
        "Batch: Roast a full tray of veg; beans take 3 min to heat.",
      ],
      storage: "Refrigerate 4 days (avocado fresh daily)",
      reheat: "Microwave 90 sec; add avocado after",
      batchTips: "Roast a massive tray of mixed veg for 5 days of meals",
    },

    {
      id: "d20",
      name: "Mushroom & Spinach Protein Risotto",
      tags: ["vegan","jain","hindu_veg","hindu_nonveg","non_veg","halal"],
      emoji: "🍄",
      gradient: "linear-gradient(135deg,#373b44,#4286f4)",
      prepTime: 10, cookTime: 28, servings: 1,
      protein: 36, carbs: 96, fat: 16, calories: 676,
      ingredients: [
        { name: "Arborio rice", qty: 90, unit: "g", category: "Carbs" },
        { name: "Mixed mushrooms (sliced)", qty: 200, unit: "g", category: "Vegetables" },
        { name: "Baby spinach", qty: 80, unit: "g", category: "Vegetables" },
        { name: "Vegetable stock (warm)", qty: 500, unit: "ml", category: "Sauces" },
        { name: "White wine or extra stock", qty: 60, unit: "ml", category: "Sauces" },
        { name: "Nutritional yeast or parmesan", qty: 20, unit: "g", category: "Proteins" },
        { name: "Lemon zest + juice", qty: 1, unit: "pcs", category: "Sauces" },
        { name: "Thyme + rosemary", qty: 4, unit: "g", category: "Seasonings" },
        { name: "Olive oil", qty: 12, unit: "ml", category: "Sauces" },
        { name: "Salt & black pepper", qty: 3, unit: "g", category: "Seasonings" },
        { name: "Silken tofu or butter (for creaminess)", qty: 40, unit: "g", category: "Proteins" },
      ],
      steps: [
        "Sauté mushrooms in olive oil on HIGH heat 5 min until golden. Season, set aside.",
        "In same pan, add a little oil. Add arborio rice, toast 1 min.",
        "Add wine. Stir until absorbed.",
        "Add warm stock one ladle at a time, stirring constantly. 18–20 min total.",
        "When rice is al dente, stir in spinach, mushrooms, nutritional yeast/parmesan, lemon.",
        "Blend in silken tofu for extra creaminess and protein.",
      ],
      storage: "Refrigerate 3 days; will thicken — add stock when reheating",
      reheat: "Microwave with 2 tbsp water, stir halfway — revives perfectly",
      batchTips: "Batch-cook and portion; reheat with a splash of stock to restore texture",
    },

  ], // end dinner
}; // end RECIPES

// ─── MACRO CALCULATION ────────────────────────────────────────
function calculateMacros(weightKg, intensity, goal) {
  // Mifflin-St Jeor with weight-proportional height estimate
  const estimatedHeight = Math.round(100 + weightKg * 0.45);
  const bmr = 10 * weightKg + 6.25 * estimatedHeight - 5 * 25 + 5;
  const activityMult = { low: 1.375, moderate: 1.55, high: 1.725 }[intensity] || 1.55;
  let tdee = bmr * activityMult;

  if (goal === "cut") tdee -= 500;
  else if (goal === "bulk") tdee += 400;

  const proteinPerKg = goal === "bulk" ? 2.2 : 2.0;
  const protein = Math.round(weightKg * proteinPerKg);
  const fat = Math.round((tdee * 0.25) / 9);
  const carbs = Math.round((tdee - protein * 4 - fat * 9) / 4);

  return {
    calories: Math.round(tdee),
    protein,
    fat,
    carbs: Math.max(carbs, 50),
  };
}

// ─── RECIPE FILTERING ────────────────────────────────────────
function getRecipesForDiet(category, diet) {
  return RECIPES[category].filter(r => r.tags.includes(diet));
}

function getRandomRecipe(category, diet) {
  const pool = getRecipesForDiet(category, diet);
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ─── INGREDIENT SCALING ──────────────────────────────────────
function scaleIngredients(ingredients, days) {
  return ingredients.map(ing => ({
    ...ing,
    qty: Math.round(ing.qty * days * 10) / 10,
  }));
}

// ─── SHOPPING LIST BUILDER ───────────────────────────────────
function buildShoppingList(recipes, days) {
  const list = {};
  const categories = ["Proteins", "Carbs", "Vegetables", "Sauces", "Seasonings"];
  categories.forEach(c => list[c] = {});

  recipes.forEach(recipe => {
    if (!recipe) return;
    const scaled = scaleIngredients(recipe.ingredients, days);
    scaled.forEach(ing => {
      const cat = ing.category;
      if (!list[cat]) list[cat] = {};
      const key = ing.name.toLowerCase();
      if (list[cat][key]) {
        list[cat][key].qty += ing.qty;
      } else {
        list[cat][key] = { name: ing.name, qty: ing.qty, unit: ing.unit };
      }
    });
  });

  return list;
}

// ─── BATCH COOKING WORKFLOW ───────────────────────────────────
function buildWorkflow(recipes) {
  const steps = [];
  steps.push("🧹 Clear and prep your workspace. Get containers ready.");
  steps.push("🌡️ Preheat oven to 200°C / 400°F.");

  const hasRice = recipes.some(r => r && r.ingredients.some(i => i.name.toLowerCase().includes("rice")));
  const hasQuinoa = recipes.some(r => r && r.ingredients.some(i => i.name.toLowerCase().includes("quinoa")));
  const hasPasta = recipes.some(r => r && r.ingredients.some(i => i.name.toLowerCase().includes("pasta")));
  const hasChicken = recipes.some(r => r && r.ingredients.some(i => i.name.toLowerCase().includes("chicken")));
  const hasSalmon = recipes.some(r => r && r.ingredients.some(i => i.name.toLowerCase().includes("salmon")));
  const hasTofu = recipes.some(r => r && r.ingredients.some(i => i.name.toLowerCase().includes("tofu")));
  const hasDal = recipes.some(r => r && r.ingredients.some(i => i.name.toLowerCase().includes("lentil")));

  if (hasRice) steps.push("🍚 Start rice cooker or pot — this takes longest.");
  if (hasQuinoa) steps.push("🌾 Start quinoa on the stove.");
  if (hasPasta) steps.push("🍝 Boil pasta water — salt generously.");

  steps.push("🔪 Chop all vegetables for all meals at once.");
  steps.push("🥣 Prepare all marinades and sauces.");

  if (hasChicken) steps.push("🍗 Season and roast chicken — oven handles it hands-free.");
  if (hasSalmon) steps.push("🐟 Season salmon fillets; bake alongside chicken if possible.");
  if (hasTofu) steps.push("🧆 Press and fry tofu until golden. Set aside.");
  if (hasDal) steps.push("🫕 Start dal / lentils simmering — it needs 20+ min.");

  steps.push("🥦 Roast or steam vegetables while proteins cook.");
  steps.push("🍳 Prepare any stovetop sauces or curries.");
  steps.push("📦 Assemble all containers while everything is hot.");
  steps.push("❄️ Cool 15 min before sealing. Label containers with day.");
  steps.push("🎉 Refrigerate. You're done! Total: ~60–90 min for the whole week.");

  return steps;
}

// ─── LOCAL STORAGE HELPERS ───────────────────────────────────
const Storage = {
  get: (key) => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } },
  set: (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} },
  remove: (key) => { try { localStorage.removeItem(key); } catch {} },
};

// ─── DIET PREFERENCE MANAGEMENT ──────────────────────────────
function getSavedDiet() { return Storage.get("preper_diet") || null; }
function saveDiet(diet) { Storage.set("preper_diet", diet); }

function getSavedMacros() { return Storage.get("preper_macros") || null; }
function saveMacros(macros) { Storage.set("preper_macros", macros); }

function getSavedPlan() { return Storage.get("preper_plan") || null; }
function savePlan(plan) { Storage.set("preper_plan", plan); }

function getSavedMeals() { return Storage.get("preper_saved_meals") || []; }
function saveNewMeal(id) {
  const saved = getSavedMeals();
  if (!saved.includes(id)) { saved.push(id); Storage.set("preper_saved_meals", saved); }
}
function removeSavedMeal(id) {
  const saved = getSavedMeals().filter(s => s !== id);
  Storage.set("preper_saved_meals", saved);
}

// ─── RECIPE CARD HTML ─────────────────────────────────────────
function renderRecipeCard(recipe, days = 1, showSaveBtn = true) {
  const saved = getSavedMeals();
  const isSaved = saved.includes(recipe.id);
  const scaled = scaleIngredients(recipe.ingredients, days);

  return `
  <article class="recipe-card" data-id="${recipe.id}">
    <div class="card-hero" style="background:${recipe.gradient}">
      <span class="card-emoji">${recipe.emoji}</span>
      ${showSaveBtn ? `<button class="save-btn ${isSaved ? 'saved' : ''}" onclick="toggleSave('${recipe.id}', this)">
        ${isSaved ? '♥ Saved' : '♡ Save'}
      </button>` : ''}
    </div>
    <div class="card-body">
      <h3 class="card-title">${recipe.name}</h3>
      <div class="card-meta">
        <span>⏱ ${recipe.prepTime}m prep</span>
        <span>🔥 ${recipe.cookTime}m cook</span>
        <span>💪 ${recipe.protein}g protein</span>
        <span>🔥 ${recipe.calories} kcal</span>
      </div>
      <div class="macro-pills">
        <span class="pill protein">P: ${recipe.protein}g</span>
        <span class="pill carbs">C: ${recipe.carbs}g</span>
        <span class="pill fat">F: ${recipe.fat}g</span>
      </div>
      <details class="card-details">
        <summary>📋 Ingredients ${days > 1 ? `(×${days} days)` : ''}</summary>
        <ul class="ingredient-list">
          ${scaled.map(ing => `<li><span class="ing-qty">${ing.qty}${ing.unit && ing.unit !== 'pcs' ? ing.unit : ''}</span> ${ing.name}</li>`).join('')}
        </ul>
      </details>
      <details class="card-details">
        <summary>👨‍🍳 Instructions</summary>
        <ol class="steps-list">
          ${recipe.steps.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </details>
      <details class="card-details">
        <summary>📦 Storage & Reheat</summary>
        <p><strong>Storage:</strong> ${recipe.storage}</p>
        <p><strong>Reheat:</strong> ${recipe.reheat}</p>
        <p><strong>Batch tip:</strong> ${recipe.batchTips}</p>
      </details>
    </div>
  </article>`;
}

// ─── SAVE/UNSAVE TOGGLE ───────────────────────────────────────
function toggleSave(id, btn) {
  const saved = getSavedMeals();
  if (saved.includes(id)) {
    removeSavedMeal(id);
    btn.textContent = '♡ Save';
    btn.classList.remove('saved');
  } else {
    saveNewMeal(id);
    btn.textContent = '♥ Saved';
    btn.classList.add('saved');
  }
}

// ─── EXPORT — must be defined BEFORE DOMContentLoaded fires ──
window.PreperApp = {
  RECIPES, DIETARY_PREFS, calculateMacros,
  getRecipesForDiet, getRandomRecipe,
  scaleIngredients, buildShoppingList, buildWorkflow,
  Storage, getSavedDiet, saveDiet, getSavedMacros, saveMacros,
  getSavedPlan, savePlan, getSavedMeals, saveNewMeal, removeSavedMeal,
  renderRecipeCard, toggleSave,
};

// ─── NAV ACTIVE STATE ────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  try {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === path) link.classList.add('active');
    });
  } catch(e) {}

  // Diet preference banner
  try {
    const diet = getSavedDiet();
    const banner = document.getElementById('diet-banner');
    if (banner) {
      banner.style.display = diet ? 'none' : 'flex';
    }
  } catch(e) {}
});

})();
