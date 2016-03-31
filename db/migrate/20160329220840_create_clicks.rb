class CreateClicks < ActiveRecord::Migration
  def change
    create_table :clicks do |t|
    	t.string :source
    	t.string :user_code
    	
    	t.timestamps
    end
  end
end
