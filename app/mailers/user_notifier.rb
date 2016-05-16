class UserNotifier < ApplicationMailer
  default :from => "letsgifton@gmail.com"

  def send_signup_email(user)
    @user = user
    mail( :to => @user.email, 
          :subject => "Thanks for joining GiftOn!")
  end
end
