class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render :show 
  end

  def new 
    @user = User.new 
    render :new 
  end

  def create
    @user = User.create(user_params) 
    if @user.valid? 
      redirect_to user_path(@user) 
    else  
      render :new 
    end
  end 

  def destroy
    @user = User.find(params[:id])
    @user.destroy 
    redirect_to new_user_path
  end

  private 

  def user_params 
    params.require(:user).permit(:first_name, :last_name)
  end
end
