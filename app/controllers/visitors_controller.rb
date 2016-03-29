class VisitorsController < ApplicationController

  def new
    @visitor = Visitor.new
  end

  def create
    @visitor = Visitor.new(visitor_params)

    respond_to do |format|

      @errorMessage = []

      if @visitor.save
        VisitorNotifier.send_saved_ideas(@visitor).deliver_now 
          format.js { render :js => "window.location.href" = '#{ideas_thankyou_path}'}        
      else
        format.js
        @visitor.errors.any?

        if (@visitor.errors["email"] != nil)
          @errorMessage.push(@visitor.errors["email"][0])
        end

        @resetForm = "0" 
      end

    end
  end

  private

  def visitor_params
    params.require(:visitor).permit(:email, :first_name, :last_name)
  end
end
