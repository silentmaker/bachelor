(ns monkey.components 
    (:require [sablono.core :as sab]))

(defn monkey-thumbs-up [data]
    (sab/html [:div
        [:h1 "how many thumbs up you want:" (:likes @data)]
        [:div [:a {:href "#" :onClick #(swap! data update-in [:likes] inc)} "thumbs up"]]]))