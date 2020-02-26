class Person

  # attr_accessor :name

  def initialize(name)
    @name = name
    # puts "#{self.name}"
  end

  def self.say_something
    # self?????
    puts "#{self}"
    puts "I am a class method defined on the #{self} class."
  end

  def name
    @name
  end
end

# Person.say_something
# andy = Person.new('andy')
andy.name
