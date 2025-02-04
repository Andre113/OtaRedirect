//
//  SceneDelegate.swift
//  OtaRedirect
//
//  Created by André Ota on 04/02/25.
//

import SwiftUI
import UIKit

@UIApplicationMain
class SceneDelegate: UIResponder, UIWindowSceneDelegate, UIApplicationDelegate {
    var window: UIWindow?
    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = scene as? UIWindowScene else { return }
        let window = UIWindow(windowScene: windowScene)
        self.window = window
        let vc = UIHostingController(rootView: HomeView())
        window.rootViewController = vc
        window.makeKeyAndVisible()
    }
}
