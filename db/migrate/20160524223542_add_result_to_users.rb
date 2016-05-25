class AddResultToUsers < ActiveRecord::Migration
  def change
    add_column :users, :hood_match, :string
    add_column :users, :heat_count, :integer
  end
end
