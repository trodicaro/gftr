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

#========================================  
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
  
  def euoy6
   @user = User.new
   @click = Click.new
    if params[:uu]
      @unique_url = params[:uu]
    else
      @unique_url = 'euoy6'
    end  
  end
  
  def ixy4t
   @user = User.new
   @click = Click.new
    if params[:uu]
      @unique_url = params[:uu]
    else
      @unique_url = 'ixy4t'
    end  
  end
  
  def g0dwp
   @user = User.new
   @click = Click.new
    if params[:uu]
      @unique_url = params[:uu]
    else
      @unique_url = 'g0dwp'
    end  
  end

   def duh2y
   @user = User.new
   @click = Click.new
    if params[:uu]
      @unique_url = params[:uu]
    else
      @unique_url = 'duh2y'
    end  
  end

  def r8xpb
    @user = User.new && @click = Click.new
      params[:uu] ? @unique_url = params[:uu] : @unique_url = 'r8xpb'
  end
  
  def e5rd6
    @user = User.new && @click = Click.new
      params[:uu] ? @unique_url = params[:uu] : @unique_url = 'e5rd6'
  end
  
  def bto30
    @user = User.new && @click = Click.new
      params[:uu] ? @unique_url = params[:uu] : @unique_url = 'bto30'
  end
end