class ConfessionsController < ActionController::API
  before_action :set_confession, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

    def index
      confessions = Confession.all

      render json: confessions
    end

    def show
      render json: confession
    end

    def create
      confession = current_user.confessions.create(confession_params)

      if confession.save
        render json: confession
      else
        render json: confession.errors.full_messages
      end

    end

    def update
      if confession.update(confession_params)
        render json: confession
      else
        render json: confession.errors, status: :unprocessable_entity
      end
    end

    def destroy
      confession.destroy

    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_confession
        confession = Confession.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def confession_params
        params.require(:confession).permit(:name, :gif_url)
      end
  end
