class RecipeIngredient

    attr_accessor :recipe, :ingredient

    @@all = []

    def initialize(recipe, ingredient) # watch for pluralizing
        @recipe = recipe
        @ingredient = ingredient
        @@all << self
    end


    def self.all
        @@all 
    end

end

# this class has the single responsibility to know about the models' relationship