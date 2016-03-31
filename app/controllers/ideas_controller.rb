class IdeasController < ApplicationController
	
	def one
   @user = User.new
   @click = Click.new
   @unique_url = params[:uu]
  end

  def thankyou
  end

  def moreinfo
   @unique_url = params[:uu]
  end

  def saveideas
    @user=User.new
    @visitor = Visitor.new
  end

end