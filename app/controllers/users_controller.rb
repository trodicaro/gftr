class UsersController < ApplicationController

  def create
    puts params[:email]
    @user = User.new(email: params[:email])
    @user.save
    UserNotifier.send_signup_email(@user).deliver
    redirect_to root_url
  end

end