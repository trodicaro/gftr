class IdeasController < ApplicationController
	
  def one
   @user = User.new
   @click = Click.new
     if params[:uu]
      @unique_url = params[:uu]
    else
      @unique_url = 'ae4lh'
    end
  end

  def thankyou
    @user=User.new
  end

  def moreinfo
   @unique_url = params[:uu]
  end

  def saveideas
#    @user=User.new
    @visitor = Visitor.new
  end
  
  def inspireme
#    @user=User.new
    @visitor = Visitor.new
  end
  
#  CONCEPT TEST
  def ae4lh
   @user = User.new
   @click = Click.new
    if params[:uu]
      @unique_url = params[:uu]
    else
      @unique_url = 'ae4lh'
    end  
  end
end