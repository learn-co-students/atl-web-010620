class Recipe


    attr_accessor :name, :description, :ingredient

    @@all = []

    def initialize(name, description)
        @name = name
        @description = description
        @@all << self
    end


    def self.all 
        @@all
    end

    def recipe_ingredients
        RecipeIngredient.all.select do |recipe_ingredient| 
            recipe_ingredient.recipe == self 
        end
    end

    def ingredients
        recipe_ingredients.map { |recipe_ingredient| recipe_ingredient.ingredient }
    end


end