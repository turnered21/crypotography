# 🔐💝 Cryptography with Linear Algebra

*Two Approaches to Romantic Mathematics*

## Overview

This repository contains **two complete cryptographic systems** that use Linear Algebra to encrypt romantic messages. Each serves both as a romantic gesture and a comprehensive teaching vehicle for linear algebra concepts.

### 📂 Version 1: Layered Cryptography (Original Love Letter)
**Location**: [`version1_love_letter/`](version1_love_letter/)

A gift-focused system with 3×3 eigenvalue-based encryption, Manim animations, and extensive romantic narrative. Perfect for presenting as an elaborate gift.

### 📚 Version 2: Academic Project Report (New)
**Location**: Root directory (this README)

A formal academic-style "Student Project" that encrypts a four-stanza poem using a unimodular 3×3 matrix. Every mathematical step is shown in complete detail—designed as a rigorous teaching document with romantic flair.

---

## Version 2: Cryptography with Linear Transformations 📚

*The Academic Project Report*

### What's Inside

This version takes a formal "Professor's Solution Manual" approach to teaching cryptography through a four-stanza romantic poem.

#### Core Files

1. **[crypto_project_report.tex](crypto_project_report.tex)** - Complete 40+ page LaTeX document
   - **Every single step** shown explicitly (no "simplifying" shortcuts)
   - Part 1: Matrix Operations & Properties (decrypt Stanza 1)
   - Part 2: Gaussian Elimination & Row Operations (decrypt Stanza 2)  
   - Part 3: Determinants & Matrix Inversion via Cofactors (decrypt Stanza 3)
   - Part 4: Vector Spaces, Rank, Kernel & Transformations (decrypt Stanza 4)

2. **[poem_crypto_verification.py](poem_crypto_verification.py)** - Python verification script
   - Encrypts the poem using matrix K
   - Generates all ciphertext vectors
   - Verifies decryption works perfectly
   - Outputs LaTeX-ready formatting
   
3. **[project_ciphertext.txt](project_ciphertext.txt)** - The encrypted poem to give students/loved ones

### The Poem (Plaintext)

```
Stanza 1: "The rows are stacked against me now, A sequence I can't quite undo;"
Stanza 2: "Since your mouth redefined the sum, The only constant left is you."
Stanza 3: "I've mapped the steps, I've traced the line, But logic's hit a sudden snare—"
Stanza 4: "The thought of us is the missing breath, When you slip and find the stairs."
```

### The Encryption Matrix

```
     ⎡ 1  1  1 ⎤
K =  ⎢ 0  1  1 ⎥  det(K) = 1 (unimodular!)
     ⎣ 0  0  1 ⎦
```

**Why This Matrix?**
- **Unimodular**: det(K) = ±1, so K⁻¹ has integer entries
- **Upper triangular**: Easy to demonstrate Gaussian elimination
- **Simple inverse**: Perfect for showing adjoint method step-by-step

**The Inverse** (computed explicitly in the report):
```
         ⎡  1  -1   0 ⎤
K⁻¹ =    ⎢  0   1  -1 ⎥
         ⎣  0   0   1 ⎦
```

### Quick Start

#### 1. Generate the Ciphertext
```bash
python poem_crypto_verification.py
```

This creates `project_ciphertext.txt` with all encrypted vectors.

#### 2. Compile the LaTeX Report
```bash
pdflatex crypto_project_report.tex
pdflatex crypto_project_report.tex  # Run twice for TOC
```

Creates a beautiful PDF showing **every single calculation**.

#### 3. Study or Present

The report is structured as a teaching document where each stanza teaches a different topic:
- **Part 1** (Stanza 1): Matrix multiplication, trace, transpose
- **Part 2** (Stanza 2): Augmented matrices, row operations, RREF
- **Part 3** (Stanza 3): Cofactor expansion, adjoint, inverse formula
- **Part 4** (Stanza 4): Vector spaces, rank, kernel, linear transformations

### Educational Value

This version is perfect for:
- **Linear Algebra instructors** looking for engaging examples
- **Students** who want to see every step of inversion/elimination
- **Romantics** who appreciate academic rigor
- **Anyone** learning cryptography with linear algebra

Every calculation includes:
- Complete arithmetic (e.g., "36 - 27 + 0 = 9")
- Matrix states after each row operation
- 2×2 determinant expansions shown as "ad - bc"
- Explicit verification of results

### Character Encoding

Simple, academic-standard encoding:
```
A=1, B=2, C=3, ..., Z=26, Space=27
```

Punctuation converted to spaces for simplicity.

### Mathematical Concepts Covered

✅ Matrix multiplication (full row-column expansions)  
✅ Trace and transpose  
✅ Gaussian elimination with row operations  
✅ Row echelon form and RREF  
✅ Determinants via cofactor expansion  
✅ Matrix of cofactors  
✅ Adjoint (adjugate) matrix  
✅ Inverse formula: K⁻¹ = (1/det K) · adj(K)  
✅ Rank and dimension  
✅ Kernel (null space) and uniqueness  
✅ Linear transformations  
✅ Rank-Nullity Theorem  

---

## Version 1: Layered Cryptography 💝

*The Original Love Letter with Manim*

**Location**: [`version1_love_letter/`](version1_love_letter/)

This version encrypts the long-form love letter using a more complex 3×3 symmetric matrix with interesting eigenvalues. Includes:

- 🎬 **Manim animations** (4-act decryption visualization)
- 💝 **Romantic narrative** (10 chapters of poetic mathematics)
- 📄 **LaTeX theory** (formal mathematical framework)
- 🎁 **Gift presentation scripts** (3 different approaches)
- 📖 **Quick start guide** (40-minute setup to delivery)

**See the [Version 1 README](version1_love_letter/README.md) for full details.**

### Key Differences: V1 vs V2

| Feature | Version 1 (Gift) | Version 2 (Academic) |
|---------|------------------|----------------------|
| **Matrix** | Symmetric with eigenvalues | Unimodular upper triangular |
| **Focus** | Romantic presentation | Rigorous pedagogy |
| **Animation** | Full Manim 4-act visualization | None (pure math) |
| **LaTeX Style** | Elegant, skip some steps | Every single step shown |
| **Documentation** | Gift guides, scripts | Teaching-focused |
| **Message** | Long personal love letter | Structured 4-stanza poem |
| **Audience** | Loved one + math enthusiast | Students + instructors |

---

## 🚀 Installation (Both Versions)

### Dependencies

```bash
pip install -r requirements.txt
```

**Installs:**
- `numpy` (both versions)
- `manim` (Version 1 only)

### LaTeX

Both versions include LaTeX documents. Install a TeX distribution:
- **Ubuntu/Debian**: `sudo apt-get install texlive-full`
- **Mac**: `brew install mactex`
- **Windows**: Download [MiKTeX](https://miktex.org/)

Or use [Overleaf](https://www.overleaf.com/) (upload the .tex files).

---

## 📖 Usage Examples

### Academic Use (Version 2)

1. **In the classroom**: Give students the ciphertext, have them work through decryption as homework
2. **Study guide**: Use the report as a worked example showing all steps
3. **Romantic gesture**: Print the report and present it as "I wrote you a textbook chapter"

### Gift Giving (Version 1)

1. **The puzzle**: Give only the ciphertext, let them decrypt
2. **The presentation**: Show Manim animation first
3. **The keepsake**: Print and frame parts of the romantic narrative

---

## 🎓 Learning Outcomes

By working through these projects, you will master:

### Computational Skills
- Matrix multiplication by hand
- Row reduction techniques
- Determinant calculation (multiple methods)
- Matrix inversion (adjoint method)
- Solving linear systems

### Theoretical Understanding  
- What makes a matrix invertible
- The geometry of linear transformations
- Rank, dimension, and the Rank-Nullity Theorem
- Kernel and injectivity
- Eigenvalues and eigenvectors (Version 1)

### Applied Cryptography
- Character encoding schemes
- Block cipher encryption
- Why unimodular matrices work well
- Decryption uniqueness guarantees

---

## 🎨 Customization

### Change the Message (Version 2)

Edit the stanzas in [`poem_crypto_verification.py`](poem_crypto_verification.py):

```python
stanza1 = "Your message here..."
stanza2 = "..."
# etc.
```

Then regenerate: `python poem_crypto_verification.py`

### Modify the Matrix

**Warning**: If you change matrix K, you must:
1. Ensure det(K) ≠ 0 (invertible)
2. Update the LaTeX document with new calculations
3. Regenerate all ciphertext

For unimodular matrices (det = ±1), try:
- Identity permutations
- Upper/lower triangular with ±1 on diagonal
- Products of such matrices

---

## 📝 Files Structure

```
crypotography/
├── README.md (this file)
├── requirements.txt
│
├── Version 2 (Academic Project):
│   ├── crypto_project_report.tex        # Complete LaTeX report
│   ├── poem_crypto_verification.py      # Encryption + verification
│   └── project_ciphertext.txt           # Output: encrypted poem
│
└── version1_love_letter/ (Original Gift Version):
    ├── README.md                         # Version 1 documentation
    ├── encryption_theory.tex             # LaTeX math framework
    ├── love_letter_decryption.py         # Manim animation
    ├── romantic_narrative.md             # 10 poetic chapters
    ├── QUICKSTART.md                     # 40-min gift setup
    └── PRESENTATION_SCRIPT.md            # 3 delivery scripts
```

---

## 💡 Pro Tips

### For Students
- **Work through Part 1 first**: Matrix operations are foundational
- **Check your arithmetic**: Small errors compound in matrix multiplication
- **Verify each step**: The report shows verification after every major calculation
- **Use the Python script**: Generate test cases to check your work

### For Instructors
- **Assign by parts**: Each stanza can be a separate homework problem
- **Modify the matrix**: Create variants for different class sections
- **Extract examples**: Individual calculations make great exam questions
- **Discuss pedagogy**: Why is this more engaging than abstract examples?

### For Romantics
- **Personalize the poem**: Make it specific to your relationship
- **Present progressively**: One stanza per date night?
- **Frame equations**: The inverse matrix formula is oddly beautiful
- **Combine versions**: Manim animation + academic rigor = ultimate gift

---

## 🙏 Acknowledgments

- **Linear Algebra**: For being simultaneously rigorous and romantic
- **Cryptography**: For giving us structured ways to say "I love you"
- **Manim Community**: For making math beautiful (Version 1)
- **All students** who've asked "When will I use this?" (Here! In love letters!)

---

## 💌 Final Thoughts

> *"In the vector space of my heart, you are the basis that spans everything."*

Mathematics is not cold. It is precise, elegant, and undeniable. When you encrypt a message using linear algebra, you're saying: "I learned an entire mathematical framework to tell you how I feel. That's not just romantic—that's dedication."

Whether you use the academic rigor of Version 2 or the cinematic presentation of Version 1 (or both!), you're demonstrating that love and logic are not opposites. They're complementary bases spanning the space of human experience.

**May your cipher be unbreakable and your affection be undeniable.**

---

**Created with 💝 and ∇ · (love) = ∞**  
*Where mathematics meets romance, one matrix inverse at a time*

### 1. **Mathematical Theory** (`encryption_theory.tex`)
A formal LaTeX document explaining the complete mathematical framework:
- **Layer 1**: Matrix Operations & Linear Transformations (encoding text to ciphertext)
- **Layer 2**: Matrix Inverse & Gauss-Jordan Elimination (the decryption key)
- **Layer 3**: Eigenvalues & Eigenvectors (the geometric heart of the transformation)

**To compile**:
```bash
pdflatex encryption_theory.tex
```

### 2. **Visualization Animation** (`love_letter_decryption.py`)
A complete Manim (Mathematical Animation Engine) script featuring:
- **Scene 1**: Chaotic encrypted vectors floating
- **Scene 2**: The inverse matrix A⁻¹ dramatically revealed
- **Scene 3**: Linear transformation animation (grid warping, vector rotation)
- **Scene 4**: The decrypted message morphing into the love letter text

**To render**:
```bash
# Render main decryption animation
manim -pqh love_letter_decryption.py LoveLetterDecryption

# Render eigenvalue visualization
manim -pqh love_letter_decryption.py EigenvalueVisualization

# High-quality 4K rendering (recommended for gifting)
manim -pql --resolution 3840,2160 love_letter_decryption.py LoveLetterDecryption
```

### 3. **Encryption System** (`encrypt_love_letter.py`)
Python script that:
- Encrypts the love letter using the 3×3 matrix A
- Generates the ciphertext to give your loved one
- Provides verification that decryption works correctly

**To run**:
```bash
python encrypt_love_letter.py
```

### 4. **The Ciphertext** (`ciphertext_for_loved_one.txt`)
The actual encrypted message ready to be printed and gifted. Your loved one must:
1. Find the inverse matrix A⁻¹ using Gauss-Jordan elimination
2. Apply A⁻¹ to each ciphertext vector
3. Convert numbers back to letters
4. Read your heartfelt message

### 5. **Romantic Narrative** (`romantic_narrative.md`)
A beautifully written essay that weaves mathematical concepts with love metaphors:
- "You are the basis vector that spans my entire reality"
- Eigenvalues as the scaling factors of love
- The determinant of a relationship
- Gauss-Jordan elimination as conflict resolution
- And much more poetic mathematics

## 🎯 The Encryption Matrix

```
     ⎡ 4  1  0 ⎤
A =  ⎢ 1  4  1 ⎥
     ⎣ 0  1  4 ⎦
```

**Properties**:
- Determinant: det(A) = 56 ≠ 0 (invertible!)
- Eigenvalues: λ₁ = 4, λ₂ = 4+√2 ≈ 5.414, λ₃ = 4-√2 ≈ 2.586
- Symmetric and tridiagonal (elegantly structured)

**The Inverse** (computed via Gauss-Jordan elimination):
```
         ⎡ 15  -4   1 ⎤
A⁻¹ = 1/56 ⎢ -4  16  -4 ⎥
         ⎣  1  -4  15 ⎦
```

## 🚀 Quick Start

### Installation

1. **Clone this repository**:
```bash
git clone [your-repo-url]
cd crypotography
```

2. **Set up Python environment**:
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

3. **Install dependencies**:
```bash
pip install -r requirements.txt
```

### Dependencies
- `numpy` - For matrix operations
- `manim` - For visualization animations
- A LaTeX distribution (for compiling the theory document)

## 💝 How to Use This Gift

### Option 1: The Full Experience
1. Print the `ciphertext_for_loved_one.txt` and give it to them
2. Watch them work through the mathematics
3. When they decrypt it, show them the Manim animation
4. Share the romantic narrative document
5. Discuss the mathematical theory together

### Option 2: The Presentation
1. Render the Manim animation in high quality
2. Show them the visualization first (emotional impact!)
3. Then explain the mathematics using `encryption_theory.tex`
4. Gift them the printed narrative as a keepsake

### Option 3: The Puzzle Box
1. Give them only the ciphertext and matrix A
2. Let them discover the inverse and eigenvalues on their own
3. Be available to provide hints about Gauss-Jordan elimination
4. Reveal the full mathematical beauty afterward

## 🎓 Educational Value

This project teaches:
- **Linear Transformations**: How matrices transform vectors in space
- **Matrix Inversion**: Computing A⁻¹ via Gauss-Jordan elimination
- **Eigenvalue Decomposition**: Finding the "heart" of a transformation
- **Basis & Span**: Fundamental concepts of vector spaces
- **Determinants**: Understanding invertibility and volume scaling
- **Applied Cryptography**: Using linear algebra for encryption

## 🎨 Customization

### Change the Message
Edit the `love_letter` variable in `encrypt_love_letter.py`:
```python
love_letter = """Your custom message here..."""
```

Then re-run the script to generate new ciphertext.

### Modify the Encryption Matrix
Change the matrix A in both `encrypt_love_letter.py` and `love_letter_decryption.py`.  
**Important**: Ensure det(A) ≠ 0 for invertibility!

### Adjust Animation Style
In `love_letter_decryption.py`, modify:
- Colors: Change gradient schemes
- Timing: Adjust `run_time` parameters
- Effects: Add more mathematical visualizations

## 📖 Mathematical Concepts Explained

### Why This Matrix Works
The matrix A was chosen because:
1. **Symmetric**: A = Aᵀ (guarantees real eigenvalues)
2. **Tridiagonal**: Efficient and elegant structure
3. **Positive Definite**: All eigenvalues > 0 (stable transformation)
4. **Invertible**: det(A) = 56 ≠ 0

### The Eigenvalue Interpretation
- **λ₁ = 4**: The steady heartbeat (unchanged fundamental frequency)
- **λ₂ = 4+√2**: The expansion (growth and joy amplification)
- **λ₃ = 4-√2**: The grounding (compression of anxiety)

### Character Encoding
```
a-z → 0-25
space → 26
, → 27, . → 28, ' → 29, " → 30
! → 31, ? → 32, - → 33, : → 34, ; → 35
other → 36
```

## 🎬 Manim Animation Details

The animation is structured in four acts:
1. **Act I**: Chaos (encrypted vectors floating randomly)
2. **Act II**: The Key (inverse matrix sliding in dramatically)
3. **Act III**: Transformation (grid warps, vectors rotate back)
4. **Act IV**: Revelation (text emerges from the vectors)

**Rendering Options**:
- `-ql`: Low quality (preview, fast)
- `-qm`: Medium quality
- `-qh`: High quality (1080p)
- `-qk`: 4K quality (3840×2160, for presentation)
- `-p`: Preview after rendering

## 🔬 Verification

Run the encryption script to verify the system works:
```bash
python encrypt_love_letter.py
```

Look for:
```
✓ Decryption successful! The message is preserved perfectly.
✓ Ciphertext has been saved to: ciphertext_for_loved_one.txt
```

## 💡 Pro Tips

1. **Practice the presentation**: The mathematics is beautiful but complex. Rehearse explaining eigenvalues romantically!

2. **Print beautifully**: Use high-quality paper for the ciphertext and narrative.

3. **Consider their math level**: If they're not mathematically inclined, focus more on the romantic narrative than the theory.

4. **Use the animation as the centerpiece**: Manim visualizations are stunning and immediately impressive.

5. **Create a physical gift box**: Include:
   - Printed ciphertext
   - A pen and graph paper for calculations
   - The romantic narrative in a nice envelope
   - A USB drive with the animation

## 📝 License & Attribution

This project is a labor of love, combining:
- Mathematical rigor
- Romantic expression  
- Educational value
- Artistic visualization

Feel free to adapt this for your own romantic mathematical declarations!

## 🙏 Acknowledgments

- **Manim Community**: For the incredible mathematical animation engine
- **Linear Algebra**: For being beautiful, precise, and romantic
- **Love**: The ultimate transformation that maps us to our best selves

---

## 💌 Final Words

> *"In the vector space of my heart, you are the basis that spans everything."*

Mathematics is the language of universal truth. When you encrypt a message of love using linear algebra, you're saying: "This is not just poetic hyperbole. This is structured, rigorous, and undeniable. This is how fundamentally you've transformed my coordinate system."

May your loved one decrypt your message and know, with mathematical certainty, how deeply they are cherished.

---

**Created with 💝 and ∇**  
*Where love and linear algebra intersect*