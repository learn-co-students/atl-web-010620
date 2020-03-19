class BooksController < ApplicationController

  before_action :authorize!, only: [:index, :create, :destroy]

  def index
    @books = Book.all
    render :json => @books, :status => :ok
  end

  def create
    @book = Book.new(book_params)
    @book.user_id = current_user.id
    @book.save
    if @book.persisted?
      render :json => @book, :status => :created
    else
      render :json => { :msg => "book creation failed..." }
    end
  end

  def destroy
    # Delete the books if the user owns it
    @book = Book.find_by(id: params[:id])
    if @book.user_id == current_user.id
      @book.destroy
      render :json => { :msg => "book has been deleted.." }
    else
      render :json => { :msg => "you're not authorized.."}
    end
  end

  private
  def book_params
    params.require(:book).permit(:title,:img,:author,:read)
  end

end
