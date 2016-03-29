class VisitorNotifier < ApplicationMailer
  default :from => "givegiftr@gmail.com"

  def send_saved_ideas(visitor)
    @visitor = visitor
    mail( :to => @visitor.email, 
          :subject => "Here are your saved ideas!")
  end
end