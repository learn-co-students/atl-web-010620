
class Ingredient

    attr_accessor :name, :measurement, :recipe

    @@all = []

    def initialize(name, measurement)
        @name = name 
        @measurement = measurement
        @@all << self
    end

    def self.all
        @@all
    end

    def recipes
        recipe_ingredients.map { |recipe_ingredient| recipe_ingredient.recipe}
    end


    def recipe_ingredients
        RecipeIngredient.all.select do |recipe_ingredient| 
            recipe_ingredient.ingredient == self 
        end
    end

end