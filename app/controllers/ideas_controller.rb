class IdeasController < ApplicationController
	
	def one
   @user = User.new
   @click = Click.new
  end

  def thankyou
  end

  def moreinfo
  end

  def saveideas
    @user=User.new
    @visitor = Visitor.new
  end

end