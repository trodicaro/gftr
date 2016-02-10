class UsersController < ApplicationController
    
  def create
      @user = User.new(user_params)
        respond_to do |format|

      @errorMessage = []

      if @user.save
        UserNotifier.send_signup_email(@user).deliver_now
        format.js {flash[:notice] = "Thanks for signing up to Giftr! We'll be in touch soon."}
		@resetForm = "1"
      else
        format.js
        @user.errors.any?
        if (@user.errors["email"] != nil)
              @errorMessage.push(@user.errors["email"][0])
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