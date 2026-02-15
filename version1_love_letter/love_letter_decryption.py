"""
Layered Cryptography Visualization
A Manim animation showing the decryption of a love letter through linear algebra
"""

from manim import *
import numpy as np

class LoveLetterDecryption(ThreeDScene):
    """
    Main scene that visualizes the entire decryption process
    """
    
    def construct(self):
        # The encryption matrix A and its inverse
        A = np.array([
            [4, 1, 0],
            [1, 4, 1],
            [0, 1, 4]
        ])
        
        A_inv = (1/56) * np.array([
            [15, -4, 1],
            [-4, 16, -4],
            [1, -4, 15]
        ])
        
        # Sample ciphertext vectors (encrypted from the love letter)
        # These represent encrypted chunks of the message
        ciphertext_vectors = [
            np.array([72, 134, 128]),    # "My "
            np.array([88, 103, 89]),     # "mou"
            np.array([115, 96, 82]),     # "th "
            np.array([93, 127, 118]),    # "has"
            np.array([84, 112, 95]),     # "n't"
        ]
        
        # Execute the four scenes
        self.scene_1_chaotic_ciphertext(ciphertext_vectors)
        self.wait(1)
        self.scene_2_inverse_matrix_reveal(A_inv)
        self.wait(1)
        self.scene_3_linear_transformation(A_inv, ciphertext_vectors)
        self.wait(1)
        self.scene_4_reveal_message()
        self.wait(2)
    
    def scene_1_chaotic_ciphertext(self, ciphertext_vectors):
        """
        Scene 1: Show ciphered vectors floating chaotically
        """
        # Title
        title = Text("The Encrypted Message", font_size=48, gradient=(RED, ORANGE))
        title.to_edge(UP)
        self.play(Write(title))
        self.wait(0.5)
        
        # Create visual representation of ciphertext vectors
        cipher_mobjects = []
        
        # Generate random positions for chaotic floating
        np.random.seed(42)  # For reproducibility
        positions = [
            np.array([np.random.uniform(-5, 5), np.random.uniform(-2, 2), 0])
            for _ in range(len(ciphertext_vectors))
        ]
        
        for i, (vec, pos) in enumerate(zip(ciphertext_vectors, positions)):
            # Create vector representation
            vec_text = MathTex(
                r"\begin{bmatrix}" + 
                f"{int(vec[0])} \\\\ {int(vec[1])} \\\\ {int(vec[2])}" +
                r"\end{bmatrix}",
                font_size=36,
                color=RED
            )
            vec_text.move_to(pos)
            
            # Add subtle rotation for chaos effect
            vec_text.rotate(np.random.uniform(-0.3, 0.3))
            
            cipher_mobjects.append(vec_text)
        
        # Animate vectors appearing and floating
        self.play(
            *[FadeIn(mob, shift=UP) for mob in cipher_mobjects],
            run_time=2
        )
        
        # Chaotic floating animation
        animations = []
        for mob in cipher_mobjects:
            new_pos = mob.get_center() + np.array([
                np.random.uniform(-1, 1),
                np.random.uniform(-0.5, 0.5),
                0
            ])
            animations.append(mob.animate.move_to(new_pos).rotate(np.random.uniform(-0.2, 0.2)))
        
        self.play(*animations, run_time=2, rate_func=there_and_back)
        
        # Store for later scenes
        self.cipher_mobjects = cipher_mobjects
        self.title = title
    
    def scene_2_inverse_matrix_reveal(self, A_inv):
        """
        Scene 2: Show the inverse matrix A^-1 sliding in - THE KEY
        """
        # Fade out title, bring in new one
        new_title = Text("The Key: A⁻¹", font_size=48, gradient=(BLUE, GREEN))
        new_title.to_edge(UP)
        
        self.play(
            Transform(self.title, new_title),
            *[mob.animate.scale(0.7).to_edge(RIGHT) for mob in self.cipher_mobjects],
            run_time=1.5
        )
        
        # Create the inverse matrix visualization
        matrix_text = MathTex(
            r"\mathbf{A}^{-1} = \frac{1}{56}",
            r"\begin{bmatrix} 15 & -4 & 1 \\ -4 & 16 & -4 \\ 1 & -4 & 15 \end{bmatrix}",
            font_size=40
        )
        matrix_text.set_color_by_gradient(BLUE, TEAL, GREEN)
        matrix_text.shift(LEFT * 2)
        
        # Slide in from left with a dramatic entrance
        matrix_text.shift(LEFT * 10)
        self.play(
            matrix_text.animate.shift(RIGHT * 10),
            run_time=2,
            rate_func=smooth
        )
        
        # Highlight the matrix
        rect = SurroundingRectangle(matrix_text, color=GOLD, buff=0.2)
        self.play(Create(rect), run_time=1)
        self.play(FadeOut(rect), run_time=0.5)
        
        # Add subtitle
        subtitle = Text(
            "The unique transformation that unlocks the message",
            font_size=24,
            color=GREY,
            slant=ITALIC
        )
        subtitle.next_to(matrix_text, DOWN, buff=0.5)
        self.play(FadeIn(subtitle), run_time=1)
        
        self.wait(1)
        
        # Store for next scene
        self.matrix_mob = VGroup(matrix_text, subtitle)
    
    def scene_3_linear_transformation(self, A_inv, ciphertext_vectors):
        """
        Scene 3: Animate the linear transformation - grid warping and vectors transforming
        """
        # Clear previous scene elements
        self.play(
            FadeOut(self.title),
            FadeOut(self.matrix_mob),
            *[FadeOut(mob) for mob in self.cipher_mobjects],
            run_time=1
        )
        
        # New title
        transform_title = Text(
            "The Transformation: Decryption", 
            font_size=48, 
            gradient=(PURPLE, PINK)
        )
        transform_title.to_edge(UP)
        self.play(Write(transform_title))
        
        # Set up 2D plane (projection of 3D space)
        plane = NumberPlane(
            x_range=[-6, 6, 1],
            y_range=[-4, 4, 1],
            background_line_style={
                "stroke_color": BLUE_D,
                "stroke_width": 1,
                "stroke_opacity": 0.5
            }
        )
        self.add(plane)
        self.play(Create(plane), run_time=1.5)
        
        # Create sample vectors in ciphertext space (2D projection for visualization)
        # Project 3D ciphertext vectors to 2D for visualization
        cipher_arrows = []
        for i in range(min(3, len(ciphertext_vectors))):
            vec = ciphertext_vectors[i]
            # Simple projection: use first two components, scale down
            vec_2d = np.array([vec[0]/50, vec[1]/50, 0])
            
            arrow = Arrow(
                ORIGIN, vec_2d,
                color=RED,
                buff=0,
                stroke_width=6,
                max_tip_length_to_length_ratio=0.15
            )
            cipher_arrows.append(arrow)
        
        # Show the ciphertext vectors
        self.play(*[Create(arrow) for arrow in cipher_arrows], run_time=1.5)
        
        # Show the transformation matrix equation
        equation = MathTex(
            r"\mathbf{v} = \mathbf{A}^{-1} \mathbf{c}",
            font_size=36,
            color=YELLOW
        )
        equation.to_corner(UL, buff=1)
        equation.shift(DOWN * 0.7)
        self.play(Write(equation), run_time=1)
        
        # Apply the inverse transformation to the plane and vectors
        # For 2D visualization, we use a 2x2 projection of A_inv
        # Extract and normalize the top-left 2x2 block
        A_inv_2d = A_inv[:2, :2] / 4  # Scale for visualization
        
        # Create the transformation animation
        self.play(
            plane.animate.apply_matrix(A_inv_2d),
            *[arrow.animate.apply_matrix(A_inv_2d) for arrow in cipher_arrows],
            run_time=3,
            rate_func=smooth
        )
        
        # Vectors are now "decrypted" - change color to indicate success
        self.play(
            *[arrow.animate.set_color(GREEN) for arrow in cipher_arrows],
            run_time=1
        )
        
        # Celebration effect
        star_positions = [arrow.get_end() for arrow in cipher_arrows]
        stars = [
            Star(color=GOLD, fill_opacity=0.8).scale(0.3).move_to(pos)
            for pos in star_positions
        ]
        
        self.play(*[FadeIn(star, scale=0.5) for star in stars], run_time=0.8)
        self.play(*[FadeOut(star) for star in stars], run_time=0.5)
        
        self.wait(1)
        
        # Fade out transformation scene
        self.play(
            FadeOut(plane),
            *[FadeOut(arrow) for arrow in cipher_arrows],
            FadeOut(equation),
            FadeOut(transform_title),
            run_time=1.5
        )
    
    def scene_4_reveal_message(self):
        """
        Scene 4: The decrypted vectors morph into the love letter text
        """
        # Title
        final_title = Text(
            "The Decrypted Message", 
            font_size=56, 
            gradient=(GOLD, YELLOW, ORANGE)
        )
        final_title.to_edge(UP)
        self.play(Write(final_title, run_time=1.5))
        
        # The love letter text (broken into manageable lines)
        love_letter_lines = [
            "My mouth hasn't shut up about you since you kissed it.",
            "The idea that you may kiss it again is stuck in my brain,",
            "which hasn't stopped thinking about you since, well,",
            "before any kiss. And now the prospect of those kiss",
            "seems to wind me like when you slip on the stairs and",
            "one of the steps hits you in the middle of the back.",
            "The notion of them continuin for what is traditionally",
            "terrifying forever excites me to an unfamiliar degree."
        ]
        
        # Starting with encrypted symbols that morph into text
        encrypted_symbols = Text(
            "◊ § ◊ ∆ § ◊ ∆ ◊ § ∆ ◊ § ◊ ∆ § ◊",
            font_size=32,
            color=RED
        )
        encrypted_symbols.shift(UP * 0.5)
        
        self.play(Write(encrypted_symbols, run_time=1))
        self.wait(0.5)
        
        # Create the actual love letter
        love_letter = VGroup()
        for i, line in enumerate(love_letter_lines):
            text = Text(line, font_size=22, color=WHITE, slant=ITALIC)
            love_letter.add(text)
        
        love_letter.arrange(DOWN, aligned_edge=LEFT, buff=0.25)
        love_letter.shift(DOWN * 0.3)
        
        # Morph encrypted symbols into the first line, then reveal rest
        self.play(
            Transform(encrypted_symbols, love_letter[0]),
            run_time=2
        )
        
        # Reveal the rest of the letter line by line
        for i in range(1, len(love_letter)):
            self.play(
                FadeIn(love_letter[i], shift=UP * 0.2),
                run_time=0.5
            )
        
        self.wait(1)
        
        # Add a heart
        heart = Text("♥", font_size=72, color=RED)
        heart.next_to(love_letter, DOWN, buff=0.5)
        self.play(
            FadeIn(heart, scale=0.3),
            heart.animate.scale(1.2),
            run_time=1.5,
            rate_func=there_and_back
        )
        
        # Final romantic decoration
        closing = Text(
            "Decrypted with love through Linear Algebra",
            font_size=24,
            color=GREY,
            slant=ITALIC
        )
        closing.to_edge(DOWN)
        self.play(Write(closing, run_time=2))
        
        # Hold the final scene
        self.wait(3)


class EigenvalueVisualization(Scene):
    """
    Bonus scene: Visualize the eigenvalues and eigenvectors
    """
    
    def construct(self):
        # Title
        title = Text("Layer 3: The Heart of the Transformation", font_size=48)
        title.set_color_by_gradient(PURPLE, PINK, RED)
        title.to_edge(UP)
        self.play(Write(title))
        self.wait(0.5)
        
        # The matrix
        matrix_eq = MathTex(
            r"\mathbf{A} = \begin{bmatrix} 4 & 1 & 0 \\ 1 & 4 & 1 \\ 0 & 1 & 4 \end{bmatrix}",
            font_size=40
        )
        matrix_eq.shift(UP * 2)
        self.play(Write(matrix_eq))
        self.wait(0.5)
        
        # Eigenvalue explanation
        eigen_title = Text("Eigenvalues: The Scaling Factors of Love", font_size=32)
        eigen_title.next_to(matrix_eq, DOWN, buff=0.8)
        self.play(FadeIn(eigen_title))
        
        # The three eigenvalues with romantic interpretation
        eigenvalues = [
            (r"\lambda_1 = 4", "The Steady Heartbeat", BLUE),
            (r"\lambda_2 = 4 + \sqrt{2} \approx 5.414", "The Expansion of Joy", GREEN),
            (r"\lambda_3 = 4 - \sqrt{2} \approx 2.586", "The Grounding Force", ORANGE)
        ]
        
        eigen_group = VGroup()
        for i, (eigenval, meaning, color) in enumerate(eigenvalues):
            eigenval_tex = MathTex(eigenval, font_size=36, color=color)
            meaning_text = Text(meaning, font_size=24, color=color, slant=ITALIC)
            
            pair = VGroup(eigenval_tex, meaning_text)
            pair.arrange(RIGHT, buff=0.5)
            eigen_group.add(pair)
        
        eigen_group.arrange(DOWN, aligned_edge=LEFT, buff=0.4)
        eigen_group.next_to(eigen_title, DOWN, buff=0.6)
        
        # Animate each eigenvalue appearing
        for pair in eigen_group:
            self.play(FadeIn(pair, shift=RIGHT), run_time=1)
            self.wait(0.5)
        
        # Final poetic statement
        self.wait(0.5)
        poem = Text(
            "Just as eigenvectors form a basis,\nyou span my entire reality.",
            font_size=28,
            color=GOLD,
            slant=ITALIC
        )
        poem.to_edge(DOWN, buff=1)
        self.play(Write(poem, run_time=3))
        
        self.wait(3)


# Instructions for running:
# To render the main decryption animation:
#   manim -pqh love_letter_decryption.py LoveLetterDecryption
#
# To render the eigenvalue explanation:
#   manim -pqh love_letter_decryption.py EigenvalueVisualization
#
# To render both scenes:
#   manim -pqh love_letter_decryption.py
