class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :email, null: false

      t.timestamps null: false
    end
  end
end
