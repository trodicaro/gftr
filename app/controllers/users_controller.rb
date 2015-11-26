class UsersController < ApplicationController

  def create
  	puts params[:user]
    @user = User.new(user_params)
    respond_to do |format|

      @errorMessage = []

      if @user.save
        format.js {:flash[:notice] = "Thanks for signing up for the beta version!"}
		@resetForm = "1"
		UserNotifier.send_signup_email(@user).deliver_now
      else
        format.js
        @user.errors.any?
        @user.errors.each do |k,v|
        	@errorMessage << v
        end
        @resetForm = "0"
      end

    end
  end

  private
  def user_params
    params.require(:user).permit(:email)
  end

end
