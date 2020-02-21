class Api::V1::AuthorsController < ApplicationController

  def index
    @authors = Author.all
    render :json => @authors, only: [ :name, :bio ], include: :books
  end

  def show
    @author = Author.find_by(:id => params[:id])
    render :json => @author, only: [ :id, :name, :bio ], include: :books
  end

end
