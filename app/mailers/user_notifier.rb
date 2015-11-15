class UserNotifier < ApplicationMailer
  default :from => "givegiftr@gmail.com"

  def send_signup_email(user)
    
    @user = user
    mail( :to => @user.email, 
          :subject => "Thanks for signing up with !")
  end
end
