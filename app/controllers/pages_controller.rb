	class PagesController < ApplicationController

  def index
    @user = User.new
  end
  
  def media
  end
  
  def unsubscribe
    @unsubscribe = Unsubscribe.new
  end
   
end