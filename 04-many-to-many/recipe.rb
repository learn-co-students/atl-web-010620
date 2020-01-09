class Recipe

    attr_accessor :name, :description, :ingredients

    @@all = []

    def initialize(name, description)
        @name = name
        @description = description
        @@all << self
        @ingredients = []
    end


    def self.all 
        @@all
    end

    def ingredients
        # #i want all the ingredients 
        # Ingredient.all
        # #i want the ingredients in this recipe
        # ingredients.self.all
        # #gimme those
        # map - select 

        # Ingredient.all.select{ |ingredient| ingredient.self}

        # look at this method and how it's pseudocoded :D 
    end


    def recipe_ingredients
        RecipeIngredient.all.select { |ingredient| recipe_ingredients.recipe == self }
    end


end