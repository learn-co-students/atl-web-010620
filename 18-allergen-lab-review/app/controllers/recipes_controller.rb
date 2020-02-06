class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all 
    render :index 
  end

  def new
    @recipe = Recipe.new  
    render :new 
  end

  def create 
    @recipe = Recipe.create(recipe_params)
    if @recipe.valid? 
      redirect_to recipes_path 
    else  
      render :new 
    end
  end

  private 

  def recipe_params 
    params.require(:recipe).permit(:title, :user_id)
  end
end
