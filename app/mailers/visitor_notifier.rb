class VisitorNotifier < ApplicationMailer
  default :from => "letsgifton@gmail.com"

  def send_saved_ideas(visitor)
    @visitor = visitor
    mail( :to => @visitor.email, 
          :subject => "Here are your saved ideas!")
  end
end