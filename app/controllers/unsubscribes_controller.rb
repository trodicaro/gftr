class UnsubscribesController < ApplicationController

  def new
    @unsubscribe = Unsubscribe.new
  end

  def create
    @unsubscribe = Unsubscribe.new(unsubscribe_params)

    respond_to do |format|

      @errorMessage = []

      if @unsubscribe.save
        format.js {flash[:notice] = "We've removed you from our mailing list. So sorry if we bugged you."}
        @resetForm = "1"

      else
        format.js
        @unsubscribe.errors.any?

        if (@unsubscribe.errors["email"] != nil)
          @errorMessage.push(@unsubscribe.errors["email"][0])
        end

        @resetForm = "0" 
      end
    end
  end

  private

  def unsubscribe_params
    params.require(:unsubscribe).permit(:email)
  end
end
