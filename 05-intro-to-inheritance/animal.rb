require 'pry'

# Deliverables: 
#  - Create an animal model who has a type/species 
#    classification and holds all animals
#  - Create a mammal model, as a type of animal subspecies
#  - Create two mammals, a dog and cat, and give 
#    them instance methods
#  - Test, creating different instances of each using Pry

class Animal 
    attr_accessor :type

    @@all =[]

    def initialize(type)
        @type = type
        @@all << self
    end

    def self.all
        @@all
    end
end

class Mammal < Animal

end

class Cat < Mammal 

    def initialize(species)
        @species = species
    end

    def meow
        puts "MEOWWWWWWWWWW!"
    end
end

class Dog < Mammal

    def woof
        puts "WOOF!"
    end
end

binding.pry