class IdeasController < ApplicationController

	def index
	end
	
	def one
   @user = User.new
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