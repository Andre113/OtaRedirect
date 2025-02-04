//
//  HomeView.swift
//  OtaRedirect
//
//  Created by André Ota on 04/02/25.
//

import SwiftUI

struct HomeView: View {
    var body: some View {
        Button {
            guard let url = URL(string: "App-Prefs:com.apple.mobilesafari") else { return }
            UIApplication.shared.open(url)
        } label: {
            Text("Open Settings")
        }
    }
}
