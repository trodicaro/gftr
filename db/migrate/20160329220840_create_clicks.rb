class CreateClicks < ActiveRecord::Migration
  def change
    create_table :clicks do |t|
    	t.string :source
    	
    	t.timestamps
    end
  end
end
