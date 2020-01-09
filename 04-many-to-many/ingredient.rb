
class Ingredient

    attr_accessor :name, :measurement, :recipes

    @@all = []

    def initialize(name, measurement)
        @name = name 
        @measurement = measurement
        @@all << self
        @recipes = []
    end

    def self.all
        @@all
    end

end