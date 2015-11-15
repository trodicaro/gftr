class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.save
    UserNotifier.send_signup_email(@user).deliver
      
  end

  private

  def user_params
    params.require(:user).permit(:email)
  end

end