class ClicksController < ApplicationController
	
	def new
		@click = Click.new
	end
		
	
	def create
		@click = Click.new
		@click.source = params[:button_clicked]
	
		@click.user_code = params[:uu]
		@click.save
		
		@where = params[:goto].to_s

		redirect_to "/#{@where}"
	end
  
  def new
    @click = Click.new
  end
end
