class UsersController < ApplicationController

  before_action :check_something_specific, only: [:index]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    redirect_to users_path
    # if @user.persisted?
    #   redirect_to users_path
    # else
    #   redirect_to posts_path
    # end
  end

  def check_something_specific
    puts "User exist. User has logged in.."
  end


  private
  def user_params
    params.require(:user).permit(:username,:email,:bio)
  end

end
