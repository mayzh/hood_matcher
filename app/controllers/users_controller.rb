require 'bcrypt'
class UsersController < ApplicationController

  def index
  @users = User.all
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(post_params)
    binding.pry
    redirect_to @user
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.destroy
    redirect_to users_path
  end

  def password
  @password ||= Password.new(password_hash)
  end


  def login
    @user = User.find_by(email: params[:email])

    if @user.password = params[:password_digest]
      give_token
    else
      redirect_to home_url
    end
  end

  private

  def post_params
    params.require(:user).permit(:email, :password_digest, :username)
  end
end
