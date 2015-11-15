class UsersController < ApplicationController
  def create
    @user = User.new(params[:user])
    if @user.save
      UserNotifier.send_signup_email(@user).deliver
      redirect_to(@user, :notice => "User subscribed")
    else
      render :action => 'new'
    end
  end
end