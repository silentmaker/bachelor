(ns monkey.core
    (:require 
        [sablono.core :as sab]
        [monkey.components :refer [monkey-thumbs-up]]))

(def app-state (atom {:likes 0}))

(defn render! []
(.render js/ReactDOM
    (monkey-thumbs-up app-state)
    (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))
(render!)