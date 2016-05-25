class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/quiz'
    else
      redirect_to '/'
    end
  end

  # before_filter :authorize

  def index
    cache @User do
      @users = User.all
    end
  end

  def destroy
    @user = current_user
    @user.destroy
    redirect_to(:back)
  end

  def show
    @user = User.find_by(id: params[:id])
    gon_user = @user
  end

  def edit
    # session[:user_id] = user.id
    gon_user = current_user

  end

  def update
    gon_user = current_user
    gon_user.update_attributes(user_params)

    redirect_to @user
  end

  def quiz
    gon_user = current_user
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :hood_match, :heat_count)
  end

end
