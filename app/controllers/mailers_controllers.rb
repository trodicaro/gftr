class MailersController < ApplicationController

def send
  puts "IN the send"
  UserNotifier.send_signup_email(@user).deliver
end

end

