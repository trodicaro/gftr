class UsersController < ApplicationController

  def create
  	puts params[:user]
      @user = User.new(user_params) #ok per walkthrough
    respond_to do |format|

      @errorMessage = []

      if @user.save #ok per walkthrough
        format.js {flash[:notice] = "Thanks for signing up for the beta version!"}
		@resetForm = "1"
		UserNotifier.send_signup_email(@user).deliver_now #ok per walkthrough
      else
        format.js
        @user.errors.any?
        if (@user.errors["email"] != nil)
              @errorMessage.push(@user.errors["email"][0])
        end  
#        @user.errors.each do |k,v|
#        	@errorMessage << v
#        end
        @resetForm = "0"
      end

    end
  end

  private
  def user_params
    params.require(:user).permit(:email)
  end

end
