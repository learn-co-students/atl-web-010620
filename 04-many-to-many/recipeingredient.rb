class RecipeIngredient

    attr_accessor :recipes, :ingredients

    @@all = []

    def initialize(recipes, ingredients)
        @recipes = recipes
        @ingredients = ingredients
        @@all << self
    end


    def self.all
        @@all 
    end

end