class Api::ListsController < ApplicationController

    def index
        @lists = List.all
        render json: @lists
    end

    def destroy
        @list = List.find(params[:id])
        @list.destroy
        render json: { message: 'List deleted successfully' }
    end

    def create
        list = List.new(list_params)
        if list.save
            render json: list, status: :created
        else
            render json: list.errors, status: :unprocessable_entity
        end
    end

    private
    def list_params
        params.require(:list).permit(:body)
    end
end
