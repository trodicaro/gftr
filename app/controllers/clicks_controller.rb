class ClicksController < ApplicationController

	def create
		@click = Click.new
		@click.source = params[:button_clicked]
		@click.save
		
		@where = params[:goto].to_s

		redirect_to "/#{@where}"
	end

end
